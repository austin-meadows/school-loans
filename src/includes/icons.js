import Vue from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library, dom } from "@fortawesome/fontawesome-svg-core";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faChartBar } from "@fortawesome/free-solid-svg-icons/faChartBar";
import { faDonate } from "@fortawesome/free-solid-svg-icons/faDonate";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import { faKey } from "@fortawesome/free-solid-svg-icons/faKey";
import { faPiggyBank } from "@fortawesome/free-solid-svg-icons/faPiggyBank";
import { faSignature } from "@fortawesome/free-solid-svg-icons/faSignature";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons/faSignInAlt";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons/faSignOutAlt";
import { faTachometerAlt } from "@fortawesome/free-solid-svg-icons/faTachometerAlt";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons/faThumbsUp";
import { faUserGraduate } from "@fortawesome/free-solid-svg-icons/faUserGraduate";

// For use with Toasted
dom.watch({
  autoReplaceSvgRoot: document.body,
  observeMutationsRoot: document.body,
});

Vue.component("fa", FontAwesomeIcon);

library.add(
  faArrowRight,
  faBars,
  faChartBar,
  faDonate,
  faEnvelope,
  faHome,
  faKey,
  faPiggyBank,
  faSignature,
  faSignInAlt,
  faSignOutAlt,
  faTachometerAlt,
  faThumbsUp,
  faUserGraduate
);
