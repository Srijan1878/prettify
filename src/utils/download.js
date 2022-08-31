import html2canvas from "html2canvas";

const downloadHandler = (ref) => {
    html2canvas(ref.current, {
      scale: 2,
    }).then(function (canvas) {
      const downloadLink = document.createElement("a");
      downloadLink.href = canvas
        .toDataURL("image/jpeg")
        .replace("image/jpeg", "image/octet-stream");
      downloadLink.download = "beautifiedCode.png";
      downloadLink.click();
    });
  };

  export default downloadHandler