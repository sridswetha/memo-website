export default function Contact() {
  return (
    <div className="px-4 sm:px-6 md:px-25 py-20 sm:py-24 md:py-30" style={{ backgroundColor: '#DBF9FF' }}>
      <h1
        className="text-6xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[150px] font-bold text-[#4C3442] tracking-wider flex justify-center mb-8 sm:mb-12"
        style={{
          fontFamily: 'UpheavalTT, Arial, sans-serif',
          textShadow: '2px 2px 6px rgba(0,0,0,0.3)'
        }}
      >
        Contact Us!
      </h1>

      <div className="flex justify-center mt-8 sm:mt-12">
        <div className="w-full max-w-4xl">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScBSYkW3wfYk_w5UudiEvUAGNNfF080rBnPVQeBo7FyJjY29g/viewform?embedded=true"
            width="100%"
            height="1921"
            className="w-full min-h-[800px] sm:min-h-[1000px] md:min-h-[1200px] lg:h-[1921px] border-0 rounded-lg shadow-lg"
            title="Contact Form"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
}