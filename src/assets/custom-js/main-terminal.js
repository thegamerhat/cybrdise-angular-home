const about = document.querySelector('#aboutButton')
const contact = document.querySelector('#contactButton')
const aboutContent = document.querySelector('#aboutContent')
const contactContent = document.querySelector('#contactContent')

about.addEventListener('click', () => {
  const aboutBox = new WinBox({
    html: ` 
    <h2 style="color: #00aa00; margin-bottom: 20px;">about-me:$
      <span class="cursor">_</span>
    </h2>
    <p>Hi! I am an <span style="color: #0F94D2;">Arch</span> user btw.</p>
    
    <p>Check out some of my Community Loved Projects!</p>
    <div style="text-decoration: none; color: #00aa00;">  
      <ol>
        <li><a href="https://github.com/thegamerhat/quick-vm/">Quick VM</a></li>
        <li><a href="https://github.com/thegamerhat/assistant">Linux Assistant</a></li>
        <li><a href="https://github.com/thegamerhat/appbook">AppBook</a></li>
        <li><a href="https://github.com/thegamerhat/windows-9.5">Windows 9.5</a></li>
        <li><a href="https://github.com/thegamerhat/vs-code-mobile">VS Code Mobile</a></li>
      </ol>
      <p>Donate: <a href="https://paypal.me/gamerhat18">PayPal</a></p>
    </div>
    `,
    class: ["no-full"],
    title: 'About',
    background: '#2A2A2A',
    width: '330px',
    height: '450px',
    x: 'center',
    y: '13%',
    mount: aboutContent,
  })
})

contact.addEventListener('click', () => {
  const contactBox = new WinBox({
    html: `
    <h2 style="color: #00aa00; margin-bottom: 30px;">contact-me:$
      <span class="cursor">_</span>
    </h2>
    <div>
      <p>Email: <a href="mailto:gamerhat18@protonmail.com">gamerhat18@pm.me</a></p>
      <p>Discord: @gamerhat#2074</p>
      <p>Telegram: <a href="https://t.me/thegamerhat">thegamerhat</a></p>
      <p>GitHub: <a href="https://github.com/thegamerhat">thegamerhat</a></p>
      <p>Twitter: <a href="https://twitter.com/thegamerhat">thegamerhat</a></p>
      <p>Instagram: <a href="https://instagram.com/thegamerhat">thegamerhat</a></p>
    </div>`,
    class: ["no-full"],
    title: 'Contact',
    background: '#2A2A2A',
    width: '325px',
    height: '430px',
    x: 'center',
    y: '41%',
    mount: contactContent,
  })
})