import { AnimatePresence } from 'framer-motion'
import Fonts from '../components/fonts'
import Layout from '../layouts/main'
import Chakra from '../libs/chakra'

if (typeof window !== 'undefined') {
    window.history.scrollRestoration = 'manual'
}  

function App({ Component, pageProps, router }) {
    return (
        <Chakra cookies={pageProps.cookies}>
            <Fonts />
            <Layout router={router}>
                <AnimatePresence
                    exitBeforeEnter
                    initial={true}
                    onExitComplete={() => {
                        if (typeof window !== 'undefined') {
                        window.scrollTo({ top: 0 })
                        }
                    }}
                >
                    <Component {...pageProps} key={router.route}/>
                </AnimatePresence>
            </Layout>
        </Chakra>
    )
}

export default App;