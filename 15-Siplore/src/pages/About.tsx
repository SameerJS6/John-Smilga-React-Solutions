import BlurPattern from "../components/BlurPattern";

type Props = {};

export default function About({}: Props) {
  return (
    <main className="space-y-8 isolate text-center py-24 lg:py-32 relative">
      <div className="space-y-6 ">
        <h3 className="text-3xl capitalize font-bold tracking-tight text-base-content sm:text-5xl lg:text-6xl">
          Siplore - Elevate your sip
        </h3>
        <p className="text-base-content text-base leading-6 mx-auto max-w-[67ch]">
          Welcome to Siplore, your ultimate destination for exploring the
          captivating world of cocktails. At Siplore, we're passionate about
          mixology and the stories behind every sip.
        </p>
      </div>

      <BlurPattern
        containerClassName="-top-40 sm:-top-80"
        elementClassName="gradient-background left-[calc(50%-11rem)] bg-gradient-to-tr from-secondary to-accent sm:left-[calc(50%-30rem)]"
        clipingPath="polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
      />

      <BlurPattern
        containerClassName="top-[calc(100%-13rem)] sm:top-[calc(100%-30rem)]"
        elementClassName="gradient-background left-[calc(50%+3rem)] bg-gradient-to-tr from-primary to-secondary sm:left-[calc(50%+36rem)]"
        clipingPath="polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
      />
    </main>
  );
}
