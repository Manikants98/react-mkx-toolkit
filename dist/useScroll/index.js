"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function useScroll() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const scrollToBottom = () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    };
    const scrollById = (id, options) => {
        const defaultOptions = {
            behavior: "smooth",
            block: "center",
            inline: "center",
        };
        const scrollOptions = Object.assign(Object.assign({}, defaultOptions), options);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView(scrollOptions);
        }
        else {
            console.error(`Element with id ${id} not found.`);
        }
    };
    return { scrollToTop, scrollToBottom, scrollById };
}
exports.default = useScroll;
//# sourceMappingURL=index.js.map