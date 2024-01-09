import { useRef } from "react";
export default function useScroll() {
    var scrollRef = useRef([]);
    var ref = function (i) {
        return function (el) {
            if (el) {
                scrollRef.current[i] = el;
            }
        };
    };
    var handleScroll = function (event, list) {
        var _a;
        var target = event.target;
        var name = target.innerText;
        var category = {};
        list.map(function (value, index) {
            return (category[value] = index);
        });
        (_a = scrollRef.current[category[name]]) === null || _a === void 0 ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
    };
    return { ref: ref, handleScroll: handleScroll };
}
