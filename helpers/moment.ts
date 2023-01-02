import moment from "moment";
import { FormattingTypes } from "types/moment";

/**
 * Gets a formatted time.
 */
function getFormatted(t: moment.MomentInput, format: FormattingTypes) {
  let formattedT = "";

  if (format === "timeAgo") {
    formattedT = moment(t).fromNow();
  }

  return formattedT;
}

// export all as default.
export default {
  getFormatted,
};
