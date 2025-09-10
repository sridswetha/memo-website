export default function Contact() {
  return (
    <div className="px-25 py-30" style={{ backgroundColor: '#DBF9FF' }}>
      <h1
        className="text-3xl font-bold text-[#0E1E3D] tracking-wider flex justify-center"
        style={{
          fontFamily: 'UpheavalTT, Arial, sans-serif',
          fontSize: '150px',
          textShadow: '2px 2px 6px rgba(0,0,0,0.3)'
        }}
      >
        Contact Us!
      </h1>


      <div className="flex justify-center mt-12">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScBSYkW3wfYk_w5UudiEvUAGNNfF080rBnPVQeBo7FyJjY29g/viewform?embedded=true"
          width="640"
          height="1921"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}
