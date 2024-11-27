document.addEventListener("DOMContentLoaded", function () {
  const urls = [
    "https://raw.githubusercontent.com/getsomecat/GetSomeCats/Surge/modules/Panel/CFGPT/CFGPT_new.sgmodule",
    "http://www.qualcomm.cn/generate_204",
    "http://cp.cloudflare.com/",
    "http://www.gstatic.com/generate_204",
    "https://www.gstatic.com/generate_204",
    "http://www.msftconnecttest.com/connecttest.txt"
  ];

  urls.forEach((url, index) => {
    const statusId = `status-${index + 1}`;
    const latencyId = `latency-${index + 1}`;
    const startTime = performance.now();

    // 发送请求
    fetch(url, { method: "HEAD", mode: "no-cors" })
      .then(() => {
        const latency = Math.round(performance.now() - startTime);
        document.getElementById(statusId).innerText = "可用";
        document.getElementById(latencyId).innerText = `${latency}`;
      })
      .catch(() => {
        document.getElementById(statusId).innerText = "不可用";
        document.getElementById(latencyId).innerText = "N/A";
      });
  });
});
