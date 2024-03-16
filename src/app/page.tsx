import Image from "next/image";
import Header from "./components/Header";
import { Button } from "./components/Button";
import Container from "./components/Container";
import PackageCard from "./components/Package";

export default function Home() {
  return (
    <>
      <Header />
      <section className="bg-[url('/assets/images/banner.jpg')] bg-no-repeat bg-center h-96 flex items-center">
        <Container>
          <h1 className="text-white text-5xl uppercase font-extrabold"><span className="text-primary block">The Ultimate</span> Transformation Plan</h1>
          <h6 className="text-white text-lg capitalize font-light mt-4 mb-7">Build muscle, burn fat and get REAL results with the ultimate personalized coaching plan</h6>
          <Button className="min-w-48">Sign Up</Button>
        </Container>
      </section>
      <section className="py-20">
        <Container>
          <div className="max-w-[900px] mx-auto text-center">
              <h2 className="text-3xl">Why Choose Sky Sins Training Plans?</h2>
              <p className="mt-4 max-w-[700px] mx-auto text-base">If you're looking to transform your body, gain more confidence and improve your life, look no 
                further. My training plan is designed to help you achieve real results with my
                100% personalized approach. You'll have the guidance and motivation you need to succeed.</p>
              <img src='/assets/images/why-choose.webp' className="mt-6" alt="why choose" />
          </div>
        </Container>
      </section>
      <section className="pt-20">
        <Container>
          <div className="flex">
            <div className="flex-1 self-center">
              <div className="pr-10">
                <h2 className="text-3xl">Personalized workout plan to achieve your DREAM body</h2>
                <p className="mt-4">Together, we will create a 100% personalized home or gym workout plan to match your level of fitness and goals to help you achieve maximum long-term results. I’ll combine the most effective strength training and cardio routines to help you look good and FEEL great.</p>
                <p>You’ll also get step-by-step workout videos and instructions along with the exact sets and reps so you know exactly what to do.</p>
                <p>The workout plan is 100% tailored to your goals and will be updated regularly to keep you conquering your goals every step of the way.</p>
                <Button className='mt-4 min-w-36'>Sign Up</Button>
              </div>
            </div>
            <div className="flex-1">
              <img src='/assets/images/fitness-plan.png' alt="why choose" />
            </div>
          </div>
        </Container>
      </section>
      <section className="pb-20">
        <Container>
          <div className="flex">
            <div className="flex-1">
              <img src='/assets/images/fitness-plan.png' alt="why choose" />
            </div>
            <div className="flex-1 self-center">
              <div className="pl-10">
                <h2 className="text-3xl">Personalized workout plan to achieve your DREAM body</h2>
                <p className="mt-4">Together, we will create a 100% personalized home or gym workout plan to match your level of fitness and goals to help you achieve maximum long-term results. I’ll combine the most effective strength training and cardio routines to help you look good and FEEL great.</p>
                <p>You’ll also get step-by-step workout videos and instructions along with the exact sets and reps so you know exactly what to do.</p>
                <p>The workout plan is 100% tailored to your goals and will be updated regularly to keep you conquering your goals every step of the way.</p>
                <Button className='mt-4 min-w-36'>Sign Up</Button>
              </div>
            </div>
            
          </div>
        </Container>
      </section>
      <section className="bg-[url('/assets/images/package.jpg')] bg-no-repeat bg-center py-20 flex items-center relative">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/60"></div>
        <Container className="z-20">
          <div className="text-center mb-11">
            <h2 className="text-3xl text-white">Ready for a Total Transformation?</h2>
            <p className="mt-4 text-white">If you're looking to transform your body, gain more confidence and improve your life, look no </p>
          </div>
          <div className="flex flex-col lg:flex-row">
            <PackageCard
              title="Monthly Plan"
              newPrice={45}
              perDay="$0.83"
              billingCycle="every 3 months"
            />
            <PackageCard
              title="3 Month Plan"
              oldPrice={120}
              newPrice={45}
              perDay="$0.87"
              billingCycle="every 3 months"
            />
            <PackageCard
              title="Yearly Plan"
              oldPrice={480}
              newPrice={120}
              perDay="$0.66"
              billingCycle="annually"
            />
          </div>
        </Container>
      </section>
      <section className="py-20">
        <Container>
          <div className="flex">
            <div className="flex-1">
              <img src='/assets/images/about.webp' alt="about" />
            </div>
            <div className="flex-1 self-center">
              <div className="pl-10">
                <h2 className="text-3xl">Meet your coach - Sky Sins</h2>
                <p>Hi, I’m Sky!</p>
                <p>Believe it or not, I was once a chubby kid with low self-esteem.</p>
                <p>I was raised on the idea that you can achieve anything in life through extreme willpower and dedication. But I didn’t truly grasp the value of this idea until the age of 15, the year I started learning about fitness and nutrition. I instantly fell in love with the lifestyle; not only did I see my body change, but my mindset too.</p>
                <p>To me fitness isn’t just physical, it’s about living life to your full potential and feeling confident. I want people to enjoy training hard and eating well. Not just to look good, but to amplify their lives.</p>
                <p>With over 12 years industry experience, you can ensure my workout and nutrition plans are specifically designed to help you achieve maximum results. Catered specifically towards you, your goals, likes and dislikes and fitness orientation.</p>
                <p>So, are you ready to make the change, build a killer body, and start the life you DESERVE?</p>
                <Button className='mt-4 min-w-36'>Join Now</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
