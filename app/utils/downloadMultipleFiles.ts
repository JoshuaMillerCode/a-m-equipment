export async function downloadMultipleFiles(files: { name: string; url: string }[]) {
  for (const file of files) {
    const link = document.createElement("a")
    link.href = file.url
    link.download = file.name
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    // Add a small delay between downloads to prevent browser blocking
    await new Promise((resolve) => setTimeout(resolve, 100))
  }
}

