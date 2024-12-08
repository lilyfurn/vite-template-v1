import CustomerReviews from "../brand/CustomerReviews"
import Features from "../brand/Features"
import GetStartedGuide from "../brand/GetStartedGuide"
import HeroSection from "../brand/HeroSection"
import MarketplaceInvite from "../brand/MarketplaceInvite"
import NewsAndEvents from "../brand/NewsAndEvents"
import ProBanner from "../brand/ProBanner"
import ProjectShowcase from "../brand/ProjectShowcase"
import SlideshowBanner from "../brand/SlidshowBanner"
import SubscriptionSelector from "../brand/SubscriptionSelector"
import TechnologyAndExperience from "../brand/TechnologyAndExperience"
import TrustedBy from "../brand/TrustedBy"
import UserFeedback from "../brand/UserFeedback"

const Home = () => {
  return (
    <div className="max-w-full">
      {/* <ProBanner /> */}
      <SlideshowBanner />
      <Features />
      <HeroSection />
      <GetStartedGuide />
      {/* <CustomerReviews /> */}
      {/* <MarketplaceInvite /> */}
      {/* <NewsAndEvents /> */}
      {/* <ProjectShowcase /> */}
      {/* <SubscriptionSelector /> */}
      {/* <TechnologyAndExperience /> */}
      {/* <TrustedBy /> */}
      {/* <UserFeedback /> */}
    </div>
  )
}

export default Home