import React from "react";
import styled from "styled-components";

function Discalmer() {
  return (
    <Container>
      <h1>DISCLAIMER</h1>
      <p>Last updated February 13, 2024</p>
      <h1>WEBSITE DISCLAIMER</h1>
      <p>
        The information provided by bukizz Solutions ("we," "us," or "our") on
        <a href="https://bukizz.com">https://bukizz.com</a> (the "Site") is for
        general informational purposes only. All information on the Site is
        provided in good faith, however we make no representation or warranty of
        any kind, express or implied, regarding the accuracy, adequacy,
        validity, reliability, availability, or completeness of any information
        on the Site. UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU
        FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF
        THE SITE OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE. YOUR USE
        OF THE SITE AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY
        AT YOUR OWN RISK.
      </p>
      <h1>EXTERNAL LINKS DISCLAIMER</h1>
      <p>
        The Site may contain (or you may be sent through the Site) links to
        other websites or content belonging to or originating from third parties
        or links to websites and features in banners or other advertising. Such
        external links are not investigated, monitored, or checked for accuracy,
        adequacy, validity, reliability, availability, or completeness by us. WE
        DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR THE
        ACCURACY OR RELIABILITY OF ANY INFORMATION OFFERED BY THIRD-PARTY
        WEBSITES LINKED THROUGH THE SITE OR ANY WEBSITE OR FEATURE LINKED IN ANY
        BANNER OR OTHER ADVERTISING. WE WILL NOT BE A PARTY TO OR IN ANY WAY BE
        RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND THIRD-PARTY
        PROVIDERS OF PRODUCTS OR SERVICES.
      </p>
      <h1>TESTIMONIALS DISCLAIMER</h1>
      <p>
        The Site may contain testimonials by users of our products and/or
        services. These testimonials reflect the real-life experiences and
        opinions of such users. However, the experiences are personal to those
        particular users, and may not necessarily be representative of all users
        of our products and/or services. We do not claim, and you should not
        assume, that all users will have the same experiences. YOUR INDIVIDUAL
        RESULTS MAY VARY.
      </p>
      <p>
        The testimonials on the Site are submitted in various forms such as
        text, audio and/or video, and are reviewed by us before being posted.
        Testimonials are edited to condense them while preserving their main
        content and delivering the message succinctly. The graphs or data
        included in testimonials may not always be entirely accurate.
      </p>
      <p>
        The views and opinions contained in the testimonials belong solely to
        the individual user and do not reflect our views and opinions. We are
        not affiliated with users who provide testimonials, and users are not
        paid or otherwise compensated for their testimonials.
      </p>
      <p>
        The testimonials on the Site are not intended, nor should they be
        construed, as claims that our products and/or services can be used to
        diagnose, treat, mitigate, cure, prevent, or otherwise be used for any
        disease or medical condition. No testimonials have been clinically
        proven or evaluated.
      </p>
    </Container>
  );
}
const Container = styled.div`
  margin: auto;
  text-align: left;
  width: 60vw;
  h1 {
    font-weight: bold;
    font-size: 50px;
    margin: 10px;
  }
  ol {
    padding-left: 20px;
  }
  p {
    margin: 5px;
    font-size: 25px;
  }
  a {
    color: blue;
    text-decoration: none;
  }

  a:hover {
    color: darkblue;
  }
  li {
    font-size: 25px;
    margin-bottom: 5px;
    list-style-type: disc;
  }
  h2 {
    font-weight: bold;
    font-size: 30px;
    margin: 10px;
  }
`;

export default Discalmer;
