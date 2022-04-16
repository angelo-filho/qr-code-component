import qrCode from "../assets/qr-code.png";

function App() {
  return (
    <div className="w-[100vw] h-[100vh] bg-light-gray flex justify-center items-center">
      <div className="w-[90%] max-w-[350px] shadow-xl px-4 py-4 font-sans text-center bg-white rounded-2xl">
        <img src={qrCode} alt="Qr code" className="rounded-xl mb-6" />

        <h2 className="desktop:px-4 mb-4 font-black text-2xl text-dark-blue">
          Improve your front-end skills by building projects
        </h2>

        <p className="px-6 mb-8 text-[16px] font-normal text-grayish-blue">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}

export default App;
