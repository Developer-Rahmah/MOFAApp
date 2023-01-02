function resolveErrorResponse(error) {
  let msg = "";
  if (error && error.data && error.data.errors && error.data.errors.details) {
    for (let i = 0; i < error.data.errors.details.length; i++) {
      msg = msg + error.data.errors.details[0].message;
      if (i + 1 < error.data.errors.details.length) {
        msg = msg + " - ";
      }
    }
  }
  return msg === "" ? null : msg;
}

const response_then = (res, errorMsg) => {
  if (res && res.data) {
    return Promise.resolve(res.data);
  } else {
    return response_catch(res, errorMsg);
  }
};
const response_catch = (error, errorMsg) => {
  console.log("eee", error);
  let msg = resolveErrorResponse(error.response);
  if (msg && msg.indexOf("not updated") !== -1) {
    return Promise.reject(new Error("Nothing to update!"));
  }
  msg = msg || errorMsg || "Unable to proceed please try again later";
  return Promise.reject(new Error(msg));
};

export { response_then, response_catch };

export default response_then;
