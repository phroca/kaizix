import * as React from "react"

const HeroSection = (props) => {
    return (
        <div className="bg-white h-screen grid justify-center mt-[140px] md:mt-0 md:px-10 lg:pb-12 sm:pt-[150px] sm:h-auto">
            <div className="grid grid-cols-2 justify-items-center items-start w-[70vw] sm:grid-cols-none sm:w-auto md:w-auto md:items-center md:gap-5 lg:items-center lg:gap-5">
                <div className="grid grid-rows-4 justify-items-start items-start sm:justify-items-center sm:items-center">
                    <div className="grid grid-cols-[30px_auto] justify-items-center items-center rounded-lg border border-[#DDDDDD] min-w-[350px] p-[5px] sm:min-w-0">
                        <div className="w-[25px] h-[25px] bg-[#5BA4D9] rounded-full" />
                        <div className="font-futura-medium text-[20px] text-black sm:text-[16px]">
                            <span className="uppercase">À la pointe de votre besoin</span>
                        </div>
                    </div>

                    <h1 className="font-futura-bold text-[55px] text-black max-w-[750px] my-[25px] sm:text-[30px] sm:max-w-none sm:mx-5 sm:mt-[50px] sm:mb-[10px] md:text-[40px] lg:text-[45px]">
                        L'engagement de vous offrir le meilleur en matière de performance et d'esthétisme.
                    </h1>

                    <p className="font-futura-light text-[24px] text-black max-w-[750px] sm:text-[16px] sm:max-w-none sm:mx-5 sm:my-5 md:text-[20px]">
                        Nous sommes une agence de développement <strong>à Orléans</strong> dans la création de sites web,
                        d'application web et mobile. Avec KAIZIX, Nous vous accompagnons dans la création de produits esthétiques, performants et personnalisés pour booster votre activité et vous différencier de la concurrence.
                    </p>

                    <div
                        className="border border-[#5BA4D9] rounded-lg grid items-center justify-items-center p-[10px] cursor-pointer transition-all duration-600 hover:bg-[#5BA4D9] group sm:mx-5 sm:my-[10px]"
                    >
                        <div
                            className="font-futura-medium text-[20px] text-[#5BA4D9] group-hover:text-white"
                            onClick={props.click}
                        >
                            Discutons de votre projet et travaillons ensemble
                        </div>
                    </div>
                </div>

                <div className="grid justify-self-end justify-items-center items-center sm:justify-self-center">
                    <div className="h-[650px] w-[500px] bg-[#F8F8F8] rounded-lg sm:h-[300px] sm:w-[350px] sm:my-5 md:h-[400px] md:w-[300px] lg:h-[400px] lg:w-[300px]">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;