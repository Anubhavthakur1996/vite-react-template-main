import { JSX } from "react";
import SectionOne from "../common/section_one/SectionOne";
import HorizontalSlide from "../common/horizontal_slide/HorizontalSlide";

type SliderProps = {
  title: {
    partOne:
      | {
          text: string;
          highlight: boolean;
        }
      | null
      | undefined;
    partTwo:
      | {
          text: string;
          highlight: boolean;
        }
      | null
      | undefined;
    partThree:
      | {
          text: string;
          highlight: boolean;
        }
      | null
      | undefined;
  };
  cardData: { id: number; title: string; description: string; src: string }[];
  buttonData: { title: string; path: string };
  colour: string;
  slides: number | null | undefined;
  height: string | undefined | null;
  width: string | undefined | null;
};

type HomeUIProps = {
  destinationSliderProps: SliderProps;
  packagesSliderProps: SliderProps;
  adventureSliderProps: SliderProps;
};

const HomeUI: React.FC<HomeUIProps> = ({
  destinationSliderProps,
  packagesSliderProps,
  adventureSliderProps,
}): JSX.Element => (
  <div className="flex flex-col w-max-screen">
    <SectionOne />
    <HorizontalSlide {...destinationSliderProps} />
    <HorizontalSlide {...packagesSliderProps} />
    <HorizontalSlide {...adventureSliderProps} />

    {/* Trending Tour Packages */}
    <section className="themes_explor_sec">
      <div className="container-fluid">
        {/* <!--  --> */}
        <div className="theme_ex_haedti">
          <h3>
            Trending Tour <span> Packages</span>{" "}
          </h3>
        </div>
        {/* <!--  --> */}
        <div className="row">
          {/* <!-- col s --> */}
          <div className="col-lg-2 col-md-4 col-6">
            <div className="theme_img_div">
              <img
                src="assets/images/wildlife-tour.png"
                alt=""
                className="img-fluid"
              />
              <p>
                <b>WILDLIFE</b>
              </p>
            </div>
          </div>
          {/* <!-- col end --> */}

          {/* <!-- col s --> */}
          <div className="col-lg-2 col-md-4 col-6">
            <div className="theme_img_div">
              <img
                src="assets/images/heritage-tour.png"
                alt=""
                className="img-fluid"
              />
              <p>
                <b>HERITAGE</b>
              </p>
            </div>
          </div>
          {/* <!-- col end --> */}

          {/* <!-- col s --> */}
          <div className="col-lg-2 col-md-4 col-6">
            <div className="theme_img_div">
              <img
                src="assets/images/pilgrimage-tour-011.png"
                alt=""
                className="img-fluid"
              />
              <p>
                <b>PILGRIMAGE</b>
              </p>
            </div>
          </div>
          {/* <!-- col end --> */}

          {/* <!-- col s --> */}
          <div className="col-lg-2 col-md-4 col-6">
            <div className="theme_img_div">
              <img
                src="assets/images/hill-station-tour.png"
                alt=""
                className="img-fluid"
              />
              <p>
                <b>HILL STATION</b>
              </p>
            </div>
          </div>
          {/* <!-- col end --> */}

          {/* <!-- col s --> */}
          <div className="col-lg-2 col-md-4 col-6">
            <div className="theme_img_div">
              <img
                src="assets/images/adventure-tour1.png"
                alt=""
                className="img-fluid"
              />
              <p>
                <b>ADVENTURE</b>
              </p>
            </div>
          </div>
          {/* <!-- col end --> */}

          {/* <!-- col s --> */}
          <div className="col-lg-2 col-md-4 col-6">
            <div className="theme_img_div">
              <img
                src="assets/images/beach-tour1.png"
                alt=""
                className="img-fluid"
              />
              <p>
                <b>BEACH</b>
              </p>
            </div>
          </div>
          {/* <!-- col end --> */}
        </div>
      </div>
    </section>

    {/* About Himachal */}
    <section className="about_index_sec">
      <div className="container-fluid">
        <div className="row">
          {/* <!-- col --> */}
          <div className="col-lg-7 col-md-12 col-12">
            {/* <!--  --> */}
            <div className="ti_about">
              <h3>
                About <span> Himachal Pradesh </span>
              </h3>
              <p>
                Himachal Pradesh a remarkable location truely to discover, by
                bus, car, motorbike, jeep or foot. Every pass crossing into a
                new valley brings you right into a unique culture, with its
                personal deities and language. Villages perched on wonderful
                slopes enchant with fairy-story structure and residents'
                easygoing warmth. Hill stations enchantment with a holiday
                atmosphere, while backpacker magnets entice with chilled-out
                vibes and mountain splendor. In the Dalai Lama's
                home-away-from-home, McLeod Ganj, or in remote Lahaul and Spiti
                with their centuries-vintage Buddhist cultures, you would
                possibly surprise whether or not you have inadvertently stumbled
                into Tibet.
              </p>
              <b>*Best time to Visit Himachal Pradesh</b>
              <p>
                February to June (Spring and Summer) is the best time to visit
                Himachal. Pleasant and best time to visit is the winters, i.e.,
                among October and February while it is the snowfall season.
              </p>
              <b>*Best places to visit in Himachal Pradesh</b>
              <p>
                <strong> 1. Kasol -</strong> On the banks of Parvati River lies
                a photogenic hamlet of Kasol. Kasol is famous among backpackers
                and hippies, and with proper reason. The lovely landscape of
                snow-capped mountains, lush valleys, scenic waterfalls and
                undisturbed trekking routes makes it a paradise for nature fans
                and trekkers, even as the abundance of captivating cafes,
                budget-pleasant stay alternatives and comfortable vibe makes it
                an best spot to backpack through.
              </p>
              <span id="dots"></span>{" "}
              <span id="more">
                <p>
                  <strong> 2. Shimla -</strong> Also known as the Queen of
                  Hills, Shimla is a fabulous colonial hill station, in which
                  picturesque vistas will greet you at each nook. A best
                  location to wander, Shimla showcases a number of the excellent
                  colonial-era structure, which includes the Viceregal Lodge,
                  the Town Hall, Gaiety Theatre and the Christ Church. The
                  city’s place on the foothills of the Himalayas amidst the
                  plush greenery and snow-included mountains makes it an ideal
                  location for hiking and different out of doors fun.{" "}
                </p>
                <div className="about_btn">
                  <a href="#enqformopen" data-bs-toggle="modal">
                    {" "}
                    <span className="fa fa-comments"></span> Request A Travel
                    Plan{" "}
                  </a>
                </div>

                <p>
                  <strong> 3. Dharamshala -</strong> Nestled withinside the top
                  reaches of Kangra Valley, Dharamshala enjoys one of the
                  high-quality climates in Himachal. Surrounded through
                  snow-encumbered peaks of Dhauladhar mountains and luxurious
                  pine and deodar forests, the city is brimming with cultural
                  and architectural attractions, together with a great number of
                  restaurants, cafes and stores catering to its considerable
                  multicultural Indian and Tibetan communities. Its suburbs,
                  together with McLeod Ganj (India’s Mini Tibet), Dharamkot,
                  Sindhbari, Ramnagar and Naddi are really well worth exploring.
                </p>

                <p>
                  <strong> 4. Spiti Valley -</strong> At an altitude of 3,810m,
                  Spiti Valley is a remote village up in the bloodless barren
                  region mountains. Despite the reality it within reason
                  isolated, lots of spiritual and adventure travelers are
                  progressively making their manner to Spiti to discover its
                  many Buddhist monasteries scattered at some stage in the area,
                  and take pleasure in interesting activities, together with
                  trekking, mountain biking, whitewater rafting and wildlife
                  spotting. In addition, it's far surrounded through numerous
                  high-altitude villages, like Tabo, Kaza, Dhankar, Kibber,
                  Komic and Langza, which also can be explored in your trip to
                  Spiti.
                </p>

                <p>
                  <strong> 5. Manali -</strong> Situated at an altitude of 2,050
                  meters at the River Beas valley, Manali is a picture-best
                  hilly retreat that attracts in hordes of travelers each year.
                  The picturesque landscape comprising lush pine and deodar
                  forests, snow-included mountains, scenic meadows, waterfalls
                  and valleys draws adventurers and nature fans alike.
                  Alternatively, the historic temples and Tibetan monasteries
                  beckon religious fanatics.
                </p>

                <div className="about_btn">
                  <a href="#enqformopen" data-bs-toggle="modal">
                    {" "}
                    <span className="fa fa-comments"></span> Request A Travel
                    Plan{" "}
                  </a>
                </div>

                <p>
                  <strong> 6. Chitkul -</strong> In the Kinnaur district of
                  Himachal lies a small but charming village, Chitkul, that is
                  possibly the last inhabited village close to the Indo-China
                  border.Its scenic panorama encompassing lush inexperienced
                  vegetation, snow-encumbered mountains and apple orchards, and
                  tranquil vibe make it a perfect location for the ones seeking
                  to be at one with nature – in peace and quiet. Of precise
                  hobby is its old fashioned homes, entire with timber or slate
                  roofs, and a temple that homes a 500-year-old deity of the
                  town.
                </p>

                <p>
                  <strong> 7. Bir Billing -</strong> Despite its tiny size, Bir
                  Billing is the it-location for paragliding in India. This is
                  the ‘Paragliding Capital of India’, after all. Bir Billing
                  boasts salubrious climate year-spherical and a remarkable
                  panorama, which pulls thrillseekers and backpackers from
                  throughout the world. The location gives panoramic vistas of
                  the undulating beauty of the Himalayan mountain ranges.
                </p>

                <p>
                  <strong> 8. Dalhousie -</strong> Dalhousie is a year-round
                  vacation destination, however appears all of the extra lovely
                  withinside the winter months, while the whole hill city is
                  protected in white sheet. Brimming with mountains, cascading
                  waterfalls, lakes and luxurious pine and oak trees, journey
                  fanatics love to come to Dalhousie to partake in out of doors
                  activities, like hiking, river rafting, canoeing, kayaking and
                  camping. While the peaceful ecosystem and pristine nature
                  lures nature fans and peace seekers alike.
                </p>

                <div className="about_btn">
                  <a href="#enqformopen" data-bs-toggle="modal">
                    {" "}
                    <span className="fa fa-comments"></span> Request A Travel
                    Plan{" "}
                  </a>
                </div>

                <p>
                  <strong> 9. Khajjiar -</strong> Khajjiar is a tiny slice of
                  paradise amidst the dense deodar forests, verdant meadows and
                  snow-capped Himalayas. Nicknamed the ‘Mini Switzerland of
                  India’, site visitors can discover its suitable scenery, get
                  up-near with the special wildlife on the Kalatop Wildlife
                  Sanctuary, and participate in out of doors activities,
                  together with woodland hiking, zorbing, horse driving and
                  paragliding on the Khajjiar Lake. An unmissable spot right
                  here is the 12th-century Khaji Nag temple. Dedicated to Lord
                  of Serpents (Khaji Nag), the temple sticks out with its lovely
                  structure, that is a concoction of Hindu and Muslim styles.
                </p>
              </span>
              <button onclick="myFunction()" id="myBtn">
                Read more
              </button>
            </div>
            {/* <!--  --> */}
          </div>
          {/* <!--  col end--> */}

          {/* <!-- col --> */}
          <div className="col-lg-5 col-md-12 col-12">
            <div className="about_img_right">
              <img
                src="assets/images/himachal.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
          {/* <!--  col end--> */}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="why_chooseus">
      <div className="container-fluid">
        <div className="why_ti">
          <h3>
            Why Choose <span> Us?</span>
          </h3>
          <p>
            More Than 20 Years Of Experience, Variety Of Tour Packages, Best
            Deals And Personalised Services.
          </p>
        </div>
        <div className="row">
          {/* <!-- col s --> */}
          <div className="col-lg-4 col-md-4 col-12">
            <div className="why_choose_us_div">
              <span className="fa fa-user-o"></span>
              <h4>Experience</h4>
              <p>
                Our dedicated travel team diligently works round-the-clock to
                design the best travel experiences for the customers. The
                skilled team spends considerable amounts of time ideating tour
                packages that guarantee to make travelling with us an experience
                like no other. We select the finest hotels in every category,
                boast an excellent personal fleet of vehicles for
                transportation.
              </p>
            </div>
          </div>
          {/* <!-- col end --> */}

          {/* <!-- col s --> */}
          <div className="col-lg-4 col-md-4 col-12">
            <div className="why_choose_us_div">
              <span className="fa fa-handshake-o"></span>
              <h4>Positive Customer Feedback</h4>
              <p>
                We're truly humbled to have received volumes of positive
                customer feedback for our services. This appreciation from our
                prestigious clients is more valuable than any award for us. As a
                customer-driven travel company, our priority has always been
                their satisfaction. Therefore, our dedicated team of experts
                endeavours to achieve the goal of making our customers happy.
              </p>
            </div>
          </div>
          {/* <!-- col end --> */}

          {/* <!-- col s --> */}
          <div className="col-lg-4 col-md-4 col-12">
            <div className="why_choose_us_div">
              <span className="fa fa-stack-overflow"></span>
              <h4>Recognition</h4>
              <p>
                We are proud to be accredited by major tour and travel
                associations in India and world like IATA, IATO, TAAI, IMF, MOT
                (Ministry of Tourism, Govt of India), and TOFT. It is an honour
                for us to be able to be a part of crucial initiatives towards
                safeguarding animal rights, protection of endangered species,
                and responsible mountaineering and trekking ventures.
              </p>
            </div>
          </div>
          {/* <!-- col end --> */}
        </div>
      </div>
    </section>
  </div>
);

export default HomeUI;
