import { createStore } from "redux";

const initState = {
  uTime: 0,
  milli: 0,
  second: 0,
  minute: 0,
  hour: 0,
  laps: [],
  tDate: 0
};

export const correction = () => ({ type: "CORRECTION", date: Date.now() });
export const start = () => ({ type: "START", date: Date.now() });

export const stop = () => ({ type: "STOP", date: Date.now() });

export const addMilli = () => ({ type: "ADD_MILLI" });

export const addSecond = () => ({ type: "ADD_SECOND" });

export const addLap = () => ({
  type: "ADD_LAP",
  date: Date.now()
});

export const reset = () => ({ type: "RESET" });

const reducer = (prev = initState, action) => {
  let { uTime, milli, second, minute, hour, laps, tDate } = prev;
  const start = new Date(tDate);
  const stop = new Date(action.date);
  switch (action.type) {
    case "CORRECTION":
			const ctime = new Date(uTime + (stop - start));
      return {
        uTime: ctime.valueOf(),
        milli: ctime.getUTCMilliseconds(),
        second: ctime.getUTCSeconds(),
        minute: ctime.getUTCMinutes(),
        hour: ctime.getUTCHours(),
        laps,
        tDate: action.date
      };
    case "START":
      const t = { ...prev };
      t.tDate = action.date;
      return t;
    case "STOP":
      const stoptime = new Date(uTime + (stop - start));
      return {
        uTime: stoptime.valueOf(),
        milli: stoptime.getUTCMilliseconds(),
        second: stoptime.getUTCSeconds(),
        minute: stoptime.getUTCMinutes(),
        hour: stoptime.getUTCHours(),
        laps,
        tDate: action.date
      };
    case "ADD_MILLI":
      milli += 63;
      if (milli >= 1000) {
        milli %= 1000;
        second++;
      }
      if (second >= 60) {
        second = 0;
        minute++;
      }
      if (minute >= 60) {
        minute = 0;
        hour++;
      }
      return { uTime, milli, second, minute, hour, laps, tDate };
    case "ADD_SECOND":
      if (++second >= 60) {
        second = 0;
        minute++;
      }
      if (minute >= 60) {
        minute = 0;
        hour++;
      }
      return { uTime, milli, second, minute, hour, laps, tDate };
    case "ADD_LAP":
      const laptime = new Date(uTime + (stop - start));
      const n = {
        milli: laptime.getUTCMilliseconds(),
        second: laptime.getUTCSeconds(),
        minute: laptime.getUTCMinutes(),
        hour: laptime.getUTCHours()
      };
      return {
        uTime,
        milli,
        second,
        minute,
        hour,
        laps: [...laps, n],
        tDate
      };
    case "RESET":
      return {
        uTime: 0,
        milli: 0,
        second: 0,
        minute: 0,
        hour: 0,
        laps,
        tDate: 0
      };
    default:
      return prev;
  }
};

// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// store.subscribe(() => console.log(store.getState()));
// export default store;

export default createStore(reducer);
