(() => {
  const emailButton = document.querySelector("[data-copy-email]");
  if (!emailButton) return;

  const email = emailButton.dataset.copyEmail;
  const label = emailButton.querySelector(".email-label");
  const originalText = label.textContent;
  let resetTimer;

  const copyWithFallback = async (text) => {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return;
    }

    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.top = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    const copied = document.execCommand("copy");
    document.body.removeChild(textarea);

    if (!copied) {
      throw new Error("Copy command failed");
    }
  };

  emailButton.addEventListener("click", async () => {
    try {
      await copyWithFallback(email);
      label.textContent = "복사 완료";
      emailButton.setAttribute("aria-label", "이메일 주소가 복사되었습니다");
    } catch {
      label.textContent = "복사 실패";
      emailButton.setAttribute("aria-label", "이메일 주소 복사 실패");
    }

    window.clearTimeout(resetTimer);
    resetTimer = window.setTimeout(() => {
      label.textContent = originalText;
      emailButton.setAttribute("aria-label", "이메일 주소 복사");
    }, 1400);
  });
})();
