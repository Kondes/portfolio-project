// const modals = () => {
//   function bindModal(
//     triggerSelector,
//     modalSelector,
//     closeSelector,
//     closeClickOverlay = true
//   ) {
//     const trigger = document.querySelector(triggerSelector),
//       modal = document.querySelector(modalSelector),
//       close = document.querySelector(closeSelector);
//     //   windows = document.querySelector("[data-modal]");

//     trigger.addEventListener("click", (e) => {
//       if (e.target) {
//         e.preventDefault();
//       }
//       modal.style.display = "block";
//       document.body.style.overflow = "hidden";
//     });

//     close.addEventListener("click", () => {
//       modal.style.display = "none";
//       document.body.style.overflow = "";
//     });

//     modal.addEventListener("click", (e) => {
//       if (e.target === modal && closeClickOverlay) {
//         modal.style.display = "none";
//         document.body.style.overflow = "";
//       }
//     });
//   }

//   bindModal(".btn", ".modal_popup", ".modal_popup .popup_close");
// };

// export default modals;
