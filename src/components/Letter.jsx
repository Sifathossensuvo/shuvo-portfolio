import Reveal from './Reveal'

export default function Letter() {
  return (
    <section className="py-40 px-8">
      <div className="max-w-[1040px] mx-auto text-center">
        <Reveal>
          <span className="block text-accent text-[13px] tracking-[0.2em] uppercase font-semibold mb-12">
            Letter to My Future Self
          </span>
        </Reveal>
        <Reveal delay={0.08} className="max-w-[660px] mx-auto bg-bgRaised border border-line p-11 sm:p-16 relative text-left">
          <p className="font-display text-[1.15rem] leading-loose text-[#d8d8d8] mb-5">
            If you're reading this years from now — I hope you kept building.
          </p>
          <p className="font-display text-[1.15rem] leading-loose text-[#d8d8d8] mb-5">
            I hope the projects got bigger, but you stayed the same person who used to celebrate
            a single working line of code.
          </p>
          <p className="font-display text-[1.15rem] leading-loose text-[#d8d8d8] mb-5">
            I hope you remember the nights that felt like they weren't leading anywhere. They were.
          </p>
          <p className="font-display text-[1.15rem] leading-loose text-[#d8d8d8] mb-9">
            Whatever you've become by the time you read this — thank you for not giving up on the
            version of you writing this today.
          </p>
          <p className="font-display italic text-accent">— Sifat, still on the way</p>
        </Reveal>
      </div>
    </section>
  )
}
