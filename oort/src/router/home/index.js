export default {
    path: '/',
    component: () => import('@/views/Home'),
    children: [
        {
            path: 'otherProblem',
            component: () => import('@/components/OtherPro')
        },
        {
            path: 'myProblem',
            component: () => import('@/components/MyPro')
        },
        {
            path: 'myAttention',
            component: () => import('@/components/MyAttention')
        },
        {
            path: 'feedback',
            components: {
                default: () => import('@/components/OtherPro'),
                feedback: () => import('@/views/Home/feedback')
            }
        },
        {
            path: 'about',
            components: {
                default: () => import('@/components/OtherPro'),
                about: () => import('@/views/About')
            }
        },
        {
            path: 'about/version',
            components: {
                // default: () => import('@/components/OtherPro'),
                about: () => import('@/views/About/Version')
            }
        },
        {
            path: 'about/contact',
            components: {
                // default: () => import('@/components/OtherPro'),
                contact: () => import('@/views/About/Contact')
            }
        },
        {
            path: '/',
            redirect: 'otherProblem'
        }
    ]
}
