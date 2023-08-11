const checkVideoSrc = (url) => {
  if (url.includes('youtu')) {
    // embed
    if (url.includes('embed')) {
      return {
        url,
        src: 'yt'
      }
    }

    // 分享, 原 yt 網址
    let videoId = ''
    if (url.includes('youtu.be')) {
      videoId = url.split('youtu.be/')[1].substr(0, 11)
    } else if (url.includes('watch?v=')) {
      videoId = url.split('watch?v=')[1].substr(0, 11)
    }
    const srcUrl = `https://www.youtube.com/embed/${videoId}`
    return {
      url: srcUrl,
      src: 'yt'
    }
  } else if (url.includes('amazonaws')) {
    return {
      url,
      src: 'aws'
    }
  }
}

export default checkVideoSrc
