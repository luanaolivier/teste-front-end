import {Header} from "../components/Header/Header"
import { Hero } from "../components/Hero/Hero"
import { Categories } from "../components/Categories"
import { RelatedProducts } from "../components/RelatedProducts"
import { Partners } from "../components/Partners"
import { Brands } from "../components/Brands"
import { Newsletter } from "../components/Newsletter"
import { Footer } from "../components/Footer"

export function Home() {
    return (
        <> 
        <Header />
        <Hero />
        <Categories />

        <RelatedProducts />
        <Partners />

        <RelatedProducts />
        <Partners />

        <Brands />

        <RelatedProducts /> 

        <Newsletter />

        <Footer />
        </>
    )
}