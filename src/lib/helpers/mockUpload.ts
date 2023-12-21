export function mockUpload(fileList: FileList): Promise<string[]> {
  return new Promise((resolve) => {
    const fakeUrls: string[] = [];

    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      const encodedFileName = encodeURIComponent(file.name);
      const fakeUrl = `https://example.com/uploads/${encodedFileName}`;
      fakeUrls.push(fakeUrl);
    }

    // Simulate a delay of 1 seconds
    setTimeout(() => {
      resolve(fakeUrls);
    }, 1000);
  });
}
