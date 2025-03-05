import { JSX } from "react";
import { Button } from "antd";
import { FaComments } from "react-icons/fa6";
import SectionOne from "../common/section_one/SectionOne";
import CardSection from "../common/CardSection";

interface PackagesUIProps {
  toggleRead: () => void;
  titleData: any; // Replace 'any' with the appropriate type
  topSelling: any; // Replace 'any' with the appropriate type
}

const PackagesUI: React.FC<PackagesUIProps> = ({
  toggleRead,
  titleData,
  topSelling,
}): JSX.Element => {
  return (
    <>
      <SectionOne />
      <section className="banner_bottom_icoon_section">
        <div className="container">
          <div className="row align-items-center">
            {/* <!-- col --> */}
            <div className="col-lg-3 col-md-3 col-12">
              <div className="haed_ti_bn_btm">
                <p>
                  <span>customize &amp; book</span> Your tour package IN{" "}
                  <span>3</span> STEPS{" "}
                </p>
              </div>
            </div>
            {/* <!-- col end --> */}

            {/* <!-- col --> */}
            <div className="col-lg-3 col-md-3 col-12">
              <div className="three_div_icon">
                <span>
                  <img src="assets/images/icon1.png" alt="" />
                </span>
                <div>
                  <b className="text-buttons">
                    Tell Us Details Of Your Plan A Holiday
                  </b>
                </div>
              </div>
            </div>
            {/* <!-- col end --> */}

            {/* <!-- col --> */}
            <div className="col-lg-3 col-md-3 col-12">
              <div className="three_div_icon three_div_icon2">
                <span>
                  <img src="assets/images/icon2.png" alt="" />
                </span>
                <div>
                  <b className="text-buttons">
                    Get Multiple Quotes From Certified Agent, Compare &amp;
                    Customize Further.
                  </b>
                </div>
              </div>
            </div>
            {/* <!-- col end --> */}

            {/* <!-- col --> */}
            <div className="col-lg-3 col-md-3 col-12">
              <div className="three_div_icon three_div_icon2">
                <span>
                  <img src="assets/images/icon3.png" alt="" />
                </span>
                <div>
                  <b className="text-buttons">Select &amp; Book Best Deal</b>
                </div>
              </div>
            </div>
            {/* <!-- col end --> */}
          </div>
        </div>
      </section>

      {/* About Himachal */}
      <section className="about_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12">
              {/* <!--  --> */}
              <div className="lg:px-[15vw] px-[5vw] font-quicksand">
                <h3 className="flex lg:flex-row flex-col lg:h-auto h-[20vh] text-center items-center text-typography font-quicksand lg:text-4xl text-2xl font-bold my-5">
                  About{" "}
                  <span className="text-buttons">&nbsp; Himachal Pradesh </span>
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
                  home-away-from-home, McLeod Ganj, or in remote Lahaul and
                  Spiti with their centuries-vintage Buddhist cultures, you
                  would possibly surprise whether or not you have inadvertently
                  stumbled into Tibet.
                </p>
                <br />
                <b className="text-buttons">
                  *Best time to Visit Himachal Pradesh
                </b>
                <p>
                  February to June (Spring and Summer) is the best time to visit
                  Himachal. Pleasant and best time to visit is the winters,
                  i.e., among October and February while it is the snowfall
                  season.
                </p>
                <span id="dots" style={{ display: "inline" }}></span>{" "}
                <span id="more" style={{ display: "none" }}>
                  <br />
                  <b className="text-buttons">
                    *Best places to visit in Himachal Pradesh
                  </b>
                  <p>
                    <strong> 1. Kasol -</strong> On the banks of Parvati River
                    lies a photogenic hamlet of Kasol. Kasol is famous among
                    backpackers and hippies, and with proper reason. The lovely
                    landscape of snow-capped mountains, lush valleys, scenic
                    waterfalls and undisturbed trekking routes makes it a
                    paradise for nature fans and trekkers, even as the abundance
                    of captivating cafes, budget-pleasant stay alternatives and
                    comfortable vibe makes it an best spot to backpack through.
                  </p>
                  <br />
                  <p>
                    <strong> 2. Shimla -</strong> Also known as the Queen of
                    Hills, Shimla is a fabulous colonial hill station, in which
                    picturesque vistas will greet you at each nook. A best
                    location to wander, Shimla showcases a number of the
                    excellent colonial-era structure, which includes the
                    Viceregal Lodge, the Town Hall, Gaiety Theatre and the
                    Christ Church. The city’s place on the foothills of the
                    Himalayas amidst the plush greenery and snow-included
                    mountains makes it an ideal location for hiking and
                    different out of doors fun.{" "}
                  </p>
                  <br />
                  <p>
                    <strong> 3. Dharamshala -</strong> Nestled withinside the
                    top reaches of Kangra Valley, Dharamshala enjoys one of the
                    high-quality climates in Himachal. Surrounded through
                    snow-encumbered peaks of Dhauladhar mountains and luxurious
                    pine and deodar forests, the city is brimming with cultural
                    and architectural attractions, together with a great number
                    of restaurants, cafes and stores catering to its
                    considerable multicultural Indian and Tibetan communities.
                    Its suburbs, together with McLeod Ganj (India’s Mini Tibet),
                    Dharamkot, Sindhbari, Ramnagar and Naddi are really well
                    worth exploring.
                  </p>
                  <br />
                  <p>
                    <strong> 4. Spiti Valley -</strong> At an altitude of
                    3,810m, Spiti Valley is a remote village up in the bloodless
                    barren region mountains. Despite the reality it within
                    reason isolated, lots of spiritual and adventure travelers
                    are progressively making their manner to Spiti to discover
                    its many Buddhist monasteries scattered at some stage in the
                    area, and take pleasure in interesting activities, together
                    with trekking, mountain biking, whitewater rafting and
                    wildlife spotting. In addition, it's far surrounded through
                    numerous high-altitude villages, like Tabo, Kaza, Dhankar,
                    Kibber, Komic and Langza, which also can be explored in your
                    trip to Spiti.
                  </p>
                  <br />
                  <p>
                    <strong> 5. Manali -</strong> Situated at an altitude of
                    2,050 meters at the River Beas valley, Manali is a
                    picture-best hilly retreat that attracts in hordes of
                    travelers each year. The picturesque landscape comprising
                    lush pine and deodar forests, snow-included mountains,
                    scenic meadows, waterfalls and valleys draws adventurers and
                    nature fans alike. Alternatively, the historic temples and
                    Tibetan monasteries beckon religious fanatics.
                  </p>

                  <br />

                  <p>
                    <strong> 6. Chitkul -</strong> In the Kinnaur district of
                    Himachal lies a small but charming village, Chitkul, that is
                    possibly the last inhabited village close to the Indo-China
                    border.Its scenic panorama encompassing lush inexperienced
                    vegetation, snow-encumbered mountains and apple orchards,
                    and tranquil vibe make it a perfect location for the ones
                    seeking to be at one with nature – in peace and quiet. Of
                    precise hobby is its old fashioned homes, entire with timber
                    or slate roofs, and a temple that homes a 500-year-old deity
                    of the town.
                  </p>
                  <br />
                  <p>
                    <strong> 7. Bir Billing -</strong> Despite its tiny size,
                    Bir Billing is the it-location for paragliding in India.
                    This is the ‘Paragliding Capital of India’, after all. Bir
                    Billing boasts salubrious climate year-spherical and a
                    remarkable panorama, which pulls thrillseekers and
                    backpackers from throughout the world. The location gives
                    panoramic vistas of the undulating beauty of the Himalayan
                    mountain ranges.
                  </p>
                  <br />
                  <p>
                    <strong> 8. Dalhousie -</strong> Dalhousie is a year-round
                    vacation destination, however appears all of the extra
                    lovely withinside the winter months, while the whole hill
                    city is protected in white sheet. Brimming with mountains,
                    cascading waterfalls, lakes and luxurious pine and oak
                    trees, journey fanatics love to come to Dalhousie to partake
                    in out of doors activities, like hiking, river rafting,
                    canoeing, kayaking and camping. While the peaceful ecosystem
                    and pristine nature lures nature fans and peace seekers
                    alike.
                  </p>

                  <br />
                  <p>
                    <strong> 9. Khajjiar -</strong> Khajjiar is a tiny slice of
                    paradise amidst the dense deodar forests, verdant meadows
                    and snow-capped Himalayas. Nicknamed the ‘Mini Switzerland
                    of India’, site visitors can discover its suitable scenery,
                    get up-near with the special wildlife on the Kalatop
                    Wildlife Sanctuary, and participate in out of doors
                    activities, together with woodland hiking, zorbing, horse
                    driving and paragliding on the Khajjiar Lake. An unmissable
                    spot right here is the 12th-century Khaji Nag temple.
                    Dedicated to Lord of Serpents (Khaji Nag), the temple sticks
                    out with its lovely structure, that is a concoction of Hindu
                    and Muslim styles.
                  </p>
                </span>
                <div className="flex justify-between items-center">
                  <Button
                    className="!bg-buttons !text-primary !font-quicksand !font-normal !text-lg !py-4 !px-6 my-5 pulse"
                    onClick={() => {}}
                  >
                    <FaComments className="text-2xl" />
                    Book A Discussion
                  </Button>
                  <Button
                    id="myBtn"
                    className="!bg-buttons !text-primary !font-quicksand !font-normal !text-lg !py-4 !px-6"
                    onClick={toggleRead}
                  >
                    Read More
                  </Button>
                </div>
              </div>
              {/* <!--  --> */}
            </div>
          </div>
        </div>
      </section>

      {/* Top Selling */}
      <CardSection titleData={titleData} cardData={topSelling} type={1} />
    </>
  );
};

export default PackagesUI;
