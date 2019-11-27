<template>
  <div class="slide-enter-active">
    <Header title="我要反馈">
      <img slot="back" src="@/assets/back.png" @touchstart="handleToBack" />
      <p class="submit" slot="right_info" @touchstart="handleToOther">提交</p>
    </Header>
    <div class="contents">
      <div class="detail">
        <div class="bg_color"></div>
        <div class="input_cont">
          <p class="title">输入标题</p>
          <el-input class="search_frame" v-model="title" placeholder="请输入标题" clearable />
          <el-input
            type="textarea"
            class="search_frame"
            :autosize="{ minRows: 6, maxRows: 8}"
            placeholder="请输入内容"
            v-model="content"
          ></el-input>
        </div>
        <div class="upload">
          <!-- <img src="@/assets/add_pic.png" alt />
          <p>添加图片或者视频</p>-->
          <input
            id="upload_file"
            ref="upload_file"
            type="file"
            style="display: none;"
            accept="image/*"
            name="file"
            @change="fileChange($event)"
          />
          <div class="image-item space" @click="showActionSheet()">
            <div class="image-up"></div>
          </div>

          <div class="upload_warp">
            <div class="upload_warp_img">
              <div class="upload_warp_img_div" v-for="(item,index) in imgList" :key="index">
                <div class="upload_warp_img_div_top">
                  <img
                    src="@/assets/icon_delete.png"
                    class="upload_warp_img_div_del"
                    @click="fileDel(index)"
                  />
                </div>
                <img :src="item.file.src" style="display: inline-block;" />
              </div>
              <div
                class="upload_warp_left"
                id="upload_warp_left"
                @click="fileClick()"
                v-if="this.imgList.length < 6"
              >
                <!--<img src="../assets/upload.png">-->
                <img src="@/assets/add_pic.png" class="imgs" />
              </div>
            </div>
          </div>

          <!-- <div class="upload_warp_text">
            <span>选中{{imgList.length}}张文件，共{{bytesToSize(this.size)}}</span>
          </div>-->
        </div>
        <div class="bg_color"></div>
        <div class="set">
          <div class="set_title">设置</div>
          <div
            class="set_public"
            v-for="(item,index) in privates"
            :key="index"
            @touchstart="changeViewRange(index)"
          >
            <img :src="getImgUrl(item.status)" />
            <div class="set_person">
              <p>{{ item.private }}</p>
              <p>{{ item.view }}</p>
            </div>
          </div>
          <!-- <div class="set_public" :currentSelec="!currentSelected" @touchstart="changeViewRange">
            <img :src="getImgUrl(currentSelec)" />
            <div class="set_person">
              <p>公开</p>
              <p>所有人可见</p>
            </div>
          </div>
          <div class="set_part" :currentSelect="!currentSelected" @touchstart="changeViewRange">
            <img :src="getImgUrl(currentSelected)" />
            <div class="set_person">
              <p>部分可见</p>
              <p>选择范围内的可见</p>
            </div>
          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  data() {
    return {
      title: "",
      content: "",
      privates: [
        { private: "公开", view: "所有人可见", status: true },
        { private: "部分可见", view: "选择范围内的可见", status: false }
      ],
      currentSelected: true,
      imgList: [],
      datas: new FormData(),
      files: 0,
      size: 0
    };
  },
  components: {
    Header
  },
  methods: {
    handleToBack() {
      this.$router.back();
    },
    getImgUrl(status) {
      let circle = "circle";
      let circle_select = "circle_select";
      let pic = status ? circle_select : circle;
      return require("@/assets/" + pic + ".png");
    },
    changeViewRange(num) {
      this.privates.map((item, index) => {
        item.status = index == num ? true : false;
      });
    },
    handleToOther() {
      let data = JSON.stringify({
        title: this.title,
        content: this.content,
        loginId: "admin"
      });
      this.axios({
        method: "post",
        url: "/api/ga/oortcloud-feedback/oortcloud-feedback/v1/add",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          requestType: "zuul"
        },
        data: data
      }).then(res => {
        console.log(res);
      });

      // this.axios
      //   .post("/api/ga/oortcloud-feedback/oortcloud-feedback/v1/add", {
      //     title: this.title,
      //     content: this.content,
      //     loginId: "admin"
      //   })
      //   .then(res => {
      //     let code = res.code;
      //     if (code == 200) {
      //       console.log(11111111);
      //     }
      //   });
    },
    //调用相册&相机
    fileClick() {
      // this.$refs.upload_file.click();
      $("#upload_file").click();
    },
    //调用手机摄像头并拍照
    getImage() {
      let cmr = plus.camera.getCamera();
      cmr.captureImage(
        function(p) {
          plus.io.resolveLocalFileSystemURL(
            p,
            function(entry) {
              compressImage(entry.toLocalURL(), entry.name);
            },
            function(e) {
              plus.nativeUI.toast("读取拍照文件错误：" + e.message);
            }
          );
        },
        function(e) {},
        {
          filter: "image"
        }
      );
    },
    //从相册选择照片
    galleryImgs() {
      plus.gallery.pick(
        function(e) {
          let name = e.substr(e.lastIndexOf("/") + 1);
          compressImage(e, name);
        },
        function(e) {},
        {
          filter: "image"
        }
      );
    },
    //点击事件，弹出选择摄像头和相册的选项
    showActionSheet() {
      let bts = [
        {
          title: "拍照"
        },
        {
          title: "从相册选择"
        }
      ];
      plus.nativeUI.actionSheet(
        {
          cancel: "取消",
          buttons: bts
        },
        function(e) {
          if (e.index == 1) {
            this.getImage();
          } else if (e.index == 2) {
            this.galleryImgs();
          }
        }
      );
    },
    fileChange(el) {
      this.files = $("#upload_file").get(0).files;
      console.log(this.files.length);
      for (let i = 0; i < this.files.length; i++) {
        this.datas.append("file", this.files[i]);
      }
      this.show1 = false;
      console.log(typeof this.files);
      console.log(this.files);
      if (!el.target.files[0].size) return;
      this.fileList(el.target);
      el.target.value = "";
    },
    fileList(fileList) {
      let files = fileList.files;
      for (let i = 0; i < files.length; i++) {
        //判断是否为文件夹
        if (files[i].type != "") {
          this.fileAdd(files[i]);
        } else {
          //文件夹处理
          this.folders(fileList.items[i]);
        }
      }
    },
    //文件夹处理
    folders(files) {
      let _this = this;
      //判断是否为原生file
      if (files.kind) {
        files = files.webkitGetAsEntry();
      }
      files.createReader().readEntries(function(file) {
        for (let i = 0; i < file.length; i++) {
          if (file[i].isFile) {
            _this.foldersAdd(file[i]);
          } else {
            _this.folders(file[i]);
          }
        }
      });
    },
    fileAdd(file) {
      //总大小
      this.size = this.size + file.size;
      //判断是否为图片文件
      if (file.type.indexOf("image") == -1) {
        file.src = "wenjian.png";
        this.imgList.push({
          file
        });
      } else {
        let reader = new FileReader();
        reader.vue = this;
        reader.readAsDataURL(file);
        reader.onload = function() {
          file.src = this.result;
          this.vue.imgList.push({
            file
          });
        };
      }
    },
    fileDel(index) {
      this.size = this.size - this.imgList[index].file.size; //总大小
      this.imgList.splice(index, 1);
    },
    bytesToSize(bytes) {
      if (bytes === 0) {
        return "0 B";
      }
      let k = 1000, // or 1024
        sizes = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
        i = Math.floor(Math.log(bytes) / Math.log(k));
      return (bytes / Math.pow(k, i)).toPrecision(3) + " " + sizes[i];
    },
    dragenter(el) {
      el.stopPropagation();
      el.preventDefault();
    },
    dragover(el) {
      el.stopPropagation();
      el.preventDefault();
    },
    drop(el) {
      el.stopPropagation();
      el.preventDefault();
      this.fileList(el.dataTransfer);
    },
    shows(et, tx) {
      this.strut = et;
      this.txt = tx;
    },
    handleClick() {
      this.$store.commit("add");
    }
  }
};
</script>
<style  scoped>
.slide-enter-active {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  overflow-y: scroll;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  z-index: 100;
  width: 100%;
  min-height: 100%;
  background: white;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
.slide-enter-active {
  animation: 0.3s slideMove;
}
@keyframes slideMove {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}
.contents {
  overflow: auto;
}
.submit {
  color: #3f70ff;
  font-size: 0.17rem;
}
.detail {
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
}
.bg_color {
  height: 0.1rem;
  background: #f2f2f2;
}
.input_cont {
  padding: 0.1rem;
  box-sizing: border-box;
}
.input_cont .title {
  font-size: 0.18rem;
  font-weight: bold;
  color: #999;
}
.input_cont .search_frame {
  margin: 0.1rem 0;
}
.upload {
  padding: 0.1rem;
  box-sizing: border-box;
}
.upload p {
  color: #666666;
  font-size: 0.1rem;
  margin-top: 0.05rem;
}
.set {
  padding: 0 0.1rem;
  box-sizing: border-box;
}
.set_public,
.set_part {
  display: flex;
  align-items: center;
  padding: 0.2rem 0;
  box-sizing: border-box;
  border-bottom: 1px solid #d8d8d8;
}
.set_public .img {
  background: url("../../assets/add_pic.png");
}
.set_public img,
.set_part img {
  width: 0.2rem;
  height: 0.2rem;
  padding-right: 0.1rem;
}
.set_public p:first-child,
.set_part p:first-child {
  color: #000;
  font-size: 0.16rem;
  font-weight: bold;
}
.set_public p:last-child,
.set_part p:last-child {
  color: #888;
}
.set_title {
  padding: 0.2rem 0;
  box-sizing: border-box;
  color: #666;
  border-bottom: 1px solid #d8d8d8;
}
.upload_warp_img_div {
  width: 0.67rem;
  height: 0.67rem;
  margin: 0 0.1rem 0.1rem 0rem;
  position: relative;
}
.upload_warp_img_div img {
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
}
.upload_warp_img_div_top {
  position: absolute;
  top: -0.07rem;
  right: -0.04rem;
}
.upload_warp_img {
  display: flex;
  flex-wrap: wrap;
}
</style>