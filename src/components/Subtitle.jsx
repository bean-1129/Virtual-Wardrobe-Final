import { ReactTyped } from "react-typed";

const Subtitle = () => (
  <div className="subtitle-container">
    <ReactTyped
  backSpeed={50}
  onBegin={function noRefCheck(){}}
  onComplete={function noRefCheck(){}}
  onDestroy={function noRefCheck(){}}
  onLastStringBackspaced={function noRefCheck(){}}
  onReset={function noRefCheck(){}}
  onStart={function noRefCheck(){}}
  onStop={function noRefCheck(){}}
  onStringTyped={function noRefCheck(){}}
  onTypingPaused={function noRefCheck(){}}
  onTypingResumed={function noRefCheck(){}}
  strings={[
    'Welcome to Virtual Studio!',
    'Explore, mix, and match outfits from the comfort of your home.',
          'Discover your unique style with our virtual wardrobe.',
          'Create custom looks with ease and confidence.'
  ]}
  typeSpeed={50}
  typedRef={function noRefCheck(){}}
/>
  </div>
);
export default Subtitle;