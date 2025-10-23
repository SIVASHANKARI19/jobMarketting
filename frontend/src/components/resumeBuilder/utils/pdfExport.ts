export const downloadAsPDF = async () => {
  const element = document.getElementById('resume-preview');
  if (!element) return;

  try {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const scale = 2;
    canvas.width = 816 * scale;
    canvas.height = 1056 * scale;

    ctx.scale(scale, scale);
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const data = await htmlToCanvas(element);

    const link = document.createElement('a');
    link.download = 'resume.png';
    link.href = data;
    link.click();
  } catch (error) {
    console.error('Error generating PDF:', error);
    alert('Unable to download PDF. Please try using your browser\'s print function (Ctrl/Cmd + P) and save as PDF.');
  }
};

const htmlToCanvas = async (element: HTMLElement): Promise<string> => {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      resolve('');
      return;
    }

    const scale = 2;
    const rect = element.getBoundingClientRect();

    canvas.width = rect.width * scale;
    canvas.height = rect.height * scale;

    ctx.scale(scale, scale);
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width / scale, canvas.height / scale);

    const svgString = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${rect.width}" height="${rect.height}">
        <foreignObject width="100%" height="100%">
          <div xmlns="http://www.w3.org/1999/xhtml">
            ${element.outerHTML}
          </div>
        </foreignObject>
      </svg>
    `;

    const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);

    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 0);
      URL.revokeObjectURL(url);
      resolve(canvas.toDataURL('image/png'));
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      resolve('');
    };
    img.src = url;
  });
};

export const printResume = () => {
  window.print();
};
