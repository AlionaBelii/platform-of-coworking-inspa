import React from 'react'

const HowItWorks = () => {
  return (
    <section className="mt-[80px] py-[45px]">
        <h1 className="mono-display text-center text-4xl mb-[60px] md:text-5xl">How It Works</h1>
        <div className="flex flex-row flex-wrap items-center py-[40px] xl:justify-between">
            <div className="flex flex-col items-center gap-3 p-7 rounded-full bg-white">
                <img src=".\public\images\howitworks\choose-design.svg" alt="Icon of pallete" />
                <p className="text-m">Choose your design type</p>
            </div>
            <img src=".\public\images\howitworks\arrow.svg" alt="Icon of arrow" />
            <div className="flex flex-col items-center gap-3 p-7 rounded-full bg-white">
                <img src=".\public\images\howitworks\select-designer.svg" alt="Icon of pallete" />
                <p className="text-m">Select a designer</p>
            </div>
            <img src=".\public\images\howitworks\arrow.svg" alt="Icon of arrow" />
            <div className="flex flex-col items-center gap-3 p-7 rounded-full bg-white">
                <img src=".\public\images\howitworks\define-details.svg" alt="Icon of pallete" />
                <p className="text-m">Define details</p>
            </div>
            <img src=".\public\images\howitworks\arrow.svg" alt="Icon of arrow" />
            <div className="flex flex-col items-center gap-3 p-7 rounded-full bg-white">
                <img src=".\public\images\howitworks\track-progress.svg" alt="Icon of pallete" />
                <p className="text-m">Track progress</p>
            </div>
            <img src=".\public\images\howitworks\arrow.svg" alt="Icon of arrow" />
            <div className="flex flex-col items-center gap-3 p-7 rounded-full bg-white">
                <img src=".\public\images\howitworks\final-result.svg" alt="Icon of pallete" />
                <p className="text-m">Receive the final result</p>
            </div>
        </div>
    </section>
  )
}

export default HowItWorks
