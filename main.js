const LinksSocialMedia = {
  github: 'fabiomoura-m',
  youtube: 'channel/UC6vmcFYyn4C6ztqJ3g_vQ-Q',
  facebook: 'fabiomoura.m',
  instagram: 'fabiomoura_m',
  twitter: 'fabiomoura_m'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userGitHub.textContent = data.login
      /*userImage.src = data.avatar_url*/
    })
}
getGitHubProfileInfos()
