<img align="center" src="https://raw.githubusercontent.com/ahmadawais/Shades-of-Purple-Hyper/master/images/Shades-of-Purple-Hyper.gif" alt="Shades-of-Purple Theme for Hyper" />

<h1 align="center">Shades of Purple Theme for Hyper™</h1>

[![GitHub stars](https://img.shields.io/github/stars/ahmadawais/shades-of-purple-hyper.svg?style=social&label=Stars)](https://github.com/ahmadawais/shades-of-purple-hyper/stargazers) [![GitHub followers](https://img.shields.io/github/followers/ahmadawais.svg?style=social&label=Follow)](https://github.com/ahmadawais?tab=followers) [![Tweet for help](https://img.shields.io/twitter/follow/mrahmadawais.svg?style=social&label=Tweet%20@MrAhmadAwais)](https://twitter.com/mrahmadawais/)

<table width="100%">
    <tr>
        <td align="left" width="100%" colspan="2">
            <strong>Shades-of-Purple Theme for Hyper™</strong><br />
            I 💜 purple, because purple can be genius.
        </td>
    </tr>
    <tr>
        <td>
            A FOSS (Free & Open Source Software) project. Maintained by <a href="https://github.com/ahmadawais">@AhmadAwais</a>.
        </td>
        <td align="center">
            <a href="https://AhmadAwais.com/">
                <img src="https://i.imgur.com/Asg4d3k.png" width="100" />
            </a>
        </td>
    </tr>
</table>

<br>

> Professional Hyper™ Terminal theme with hand-picked & bold shades of purple 💜 to go along with your command line usage. A custom Hyper™ Terminal theme with style.

<br>

![Install](https://on.ahmda.ws/qWVC/c)

## Easy Installation

Make sure you have the latest Hyper™ Terminal installed i.e. >= ver 2.0. Which comes with the Hyper CLI. Then just run the following command.

```sh
hyper i shades-of-purple-hyper
```

## Manual Installation

1. Go to Hyper™ preferences i.e. Open your `~/.hyper.js` config file. On mac press <kbd>Command ⌘</kbd> + <kbd>,</kbd> — or just use your code editor like `code ~/.hyper.js` or `subl ~/.hyper.js` or `vim ~/.hyper.js`.
2. Add `shades-of-purple-hyper` to your plugins array. Kindov like this:

```js
plugins: [
  'shades-of-purple-hyper'
],
```

— Done!!! 🙌

> _🔥 TIP: If you want your terminal to look exactly like that, then I can share the fact that I use ZSH, with Powerline fonts in iTerm2 for which I created a [Shades of Purple ZSH theme](https://github.com/ahmadawais/shades-of-purple-iterm2) as well. You might want to add that after installing ZSH._

## My Configuration File

To add a cool border, or some of the plugins that I use, you can checkout my configuration below and add this to your `~/.hyper.js` config file

![My Config](https://on.ahmda.ws/ee9820/c)

```js
module.exports = {
	config: {
		// Choose either "stable" for receiving highly polished,
		// or "canary" for less polished but more frequent updates.
		updateChannel: 'stable',

		// Default font size in pixels for all tabs.
		fontSize: 18,

		// Font family with optional fallbacks.
		fontFamily: '"Operator Mono", "Inconsolata for Powerline", "IBMPlexMono-Italic",monospace',

		// Terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk).
		cursorColor: 'rgba(248,28,229,0.8)',

		// `BEAM` for |, `UNDERLINE` for _, `BLOCK` for █.
		cursorShape: 'BEAM',

		// Set to true for blinking cursor.
		cursorBlink: false,

		// Custom css to embed in the main window.
		css: `
      .term_fit:not(.term_term) {
        opacity: 1 !important
      }
      .terminal: not(.focus) {
        opacity: 1;
        }
      .terminal.focus {
        opacity: 1;
      }
    `,

		// custom css to embed in the terminal window
		termCSS: '',

		// set to `true` (without backticks) if you're using a Linux setup that doesn't show native menus
		// default: `false` on Linux, `true` on Windows (ignored on macOS)
		showHamburgerMenu: '',

		// set to `false` if you want to hide the minimize, maximize and close buttons
		// additionally, set to `'left'` if you want them on the left, like in Ubuntu
		// default: `true` on windows and Linux (ignored on macOS)
		showWindowControls: '',

		// custom padding (css format, i.e.: `top right bottom left`)
		padding: '12px 14px',


		// Windows
		// - Make sure to use a full path if the binary name doesn't work
		// - Remove `--login` in shellArgs
		//
		// Bash on Windows
		// - Example: `C:\\Windows\\System32\\bash.exe`
		//
		// Powershell on Windows
		// - Example: `C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe`
		shell: '',

		// For setting shell arguments (i.e. for using interactive shellArgs: ['-i']).
		// by default ['--login'] will be used.
		shellArgs: ['--login'],

		// For environment variables.
		env: {},

		// Set to false for no bell.
		bell: 'SOUND',

		// If true, selected text will automatically be copied to the clipboard.
		copyOnSelect: false,

		// For advanced config flags please refer to https://hyper.is/#cfg
		hyperBorder: {
			// animate: {
			// 	duration: '0.2s' // default is 16s
			// },
			// borderColors: ['#FF2C70', '#5D3DE1', '#fad000', '#6937FF'],
			borderColors: ['#FF2C70', '#6937FF'],
			borderWidth: '3px'
		}
    },
    // Hyper plugins.
    plugins: ['hyper-snazzy', 'hyperlinks', 'hyperborder', 'shades-of-purple-hyper'],
};

```

<br>

![Shades of purple for other software](https://on.ahmda.ws/qYAe/c)

## Put `Shades of Purple` In Other Places!

I have built other `Shades of Purple` themes for different software. Here's a list.

- 💜 [VSCode theme](https://github.com/ahmadawais/shades-of-purple-vscode) — Shades of Purple
- 💜 [iTerm2 theme](https://github.com/ahmadawais/shades-of-purple-iterm2) — Shades of Purple
- 💜 [Hyper™ theme](https://github.com/ahmadawais/shades-of-purple-hyper) — Shades of Purple
- 💜 [Konsole theme](https://github.com/ahmadawais/shades-of-purple-konsole) — Shades of Purple
- 💜 [Slack theme](https://github.com/ahmadawais/shades-of-purple-slack) — Shades of Purple
- 💜 [Alfred theme](https://github.com/ahmadawais/shades-of-purple-alfred) — Shades of Purple
- 💜 [Cygwin theme](https://github.com/ahmadawais/Shades-of-Purple-Cygwin) — Shades of Purple


<br>

![Hello](https://on.ahmda.ws/os6O/c)

#### **Hello, we're the [WordPress Couple](https://TheDevCoulple.com)**!

I ([Ahmad Awais](https://twitter.com/mrahmadawais/)) am a Full Stack Web Developer and a regular core contributor at WordPress. My significant other ([Maedah Batool](https://twitter.com/MaedahBatool/)) is a Technical Project Manager, and she's also a WordPress Core Contributor. Together with our [team](https://TheDevCoulple.com/team), we run the [TheDevCoulple.com](https://TheDevCoulple.com/).

If you'd like to get insights into our love for open source software, professional full stack development, WordPress community, the growth of JavaScript or growing a family, building, and bootstrapping a business, then subscribe to our premium newsletter called ↣ [The WordPress Takeaway](https://WPTakeaway.club)!

#### [**Support our Open Source Projects!**](https://pay.paddle.com/checkout/515568) 🎩

If you'd like us to keep producing professional free and open source software (FOSS). Consider [paying for an hour of my dev-time](https://pay.paddle.com/checkout/515568). We'll spend two hours on open source for each contribution. Yeah, that's right, you pay for one hour and get both of us to spend an hour as a thank you.

<br>

![Partners](https://on.ahmda.ws/osEJ/c)

### Project Backers & [TheDevCoulple Partners](https://TheDevCoulple.com/partners) ⚡️

This FOSS (free and open source software) project is updated and maintained with the help of awesome businesses listed below. Without the support from these amazing companies/individuals, this project would not have been possible.

— _What/How? [Read more about it →](https://TheDevCoulple.com/partners)_

<table width='100%'>
	<tr>
		<td width='333.33'><a target='_blank' href='https://www.gravityforms.com/?utm_source=TheDevCoulple&utm_medium=Partner'><img src='https://raw.githubusercontent.com/ahmadawais/shades-of-purple-vscode/master/images/wpc_gravity.png' /></a></td>
		<td width='333.33'><a target='_blank' href='https://kinsta.com/?kaid=WMDAKYHJLNJX&utm_source=TheDevCoulple&utm_medium=Partner'><img src='https://raw.githubusercontent.com/ahmadawais/shades-of-purple-vscode/master/images/wpc_kisnta.png' /></a></td>
		<td width='333.33'><a target='_blank' href='https://ahmda.ws/USES_WPE?utm_source=TheDevCoulple&utm_medium=Partner'><img src='https://raw.githubusercontent.com/ahmadawais/shades-of-purple-vscode/master/images/wpc_wpe.png' /></a></td>
	</tr>
	<tr>
		<td width='333.33'><a target='_blank' href='https://www.sitelock.com/?utm_source=TheDevCoulple&utm_medium=Partner'><img src='https://raw.githubusercontent.com/ahmadawais/shades-of-purple-vscode/master/images/wpc_sitelock.png' /></a></td>
		<td width='333.33'><a target='_blank' href='https://wp-rocket.me/?utm_source=TheDevCoulple&utm_medium=Partner'><img src='https://raw.githubusercontent.com/ahmadawais/shades-of-purple-vscode/master/images/wpc_wpr.png' /></a></td>
		<td width='333.33'><a target='_blank' href='https://blogvault.net/?utm_source=TheDevCoulple&utm_medium=Partner'><img src='https://raw.githubusercontent.com/ahmadawais/shades-of-purple-vscode/master/images/wpc_bv.png' /></a></td>
	</tr>
	<tr>
		<td width='333.33'><a target='_blank' href='https://cridio.com/?utm_source=TheDevCoulple&utm_medium=Partner'><img src='https://raw.githubusercontent.com/ahmadawais/shades-of-purple-vscode/master/images/wpc_cwp.png' /></a></td>
		<td width='333.33'><a target='_blank' href='https://wecobble.com/?utm_source=TheDevCoulple&utm_medium=Partner'><img src='https://raw.githubusercontent.com/ahmadawais/shades-of-purple-vscode/master/images/wpc_wpcbl.png' /></a></td>
		<td width='333.33'><a target='_blank' href='https://www.cloudways.com/?utm_source=TheDevCoulple&utm_medium=Partner'><img src='https://raw.githubusercontent.com/ahmadawais/shades-of-purple-vscode/master/images/wpc_cwys.png' /></a></td>
	</tr>
	<tr>
		<td width='333.33'><a target='_blank' href='https://www.cozmoslabs.com/?utm_source=TheDevCoulple&utm_medium=Partner'><img src='https://raw.githubusercontent.com/ahmadawais/shades-of-purple-vscode/master/images/wpc_czmz.png' /></a></td>
		<td width='333.33'><a target='_blank' href='https://wpgeodirectory.com/?utm_source=TheDevCoulple&utm_medium=Partner'><img src='https://raw.githubusercontent.com/ahmadawais/shades-of-purple-vscode/master/images/wpc_geodir.png' /></a></td>
		<td width='333.33'><a target='_blank' href='https://www.wpsecurityauditlog.com/?utm_source=TheDevCoulple&utm_medium=Partner'><img src='https://raw.githubusercontent.com/ahmadawais/shades-of-purple-vscode/master/images/wp_sal.png' /></a></td>
	</tr>
	<tr>
		<td width='333.33'><a target='_blank' href='https://mythemeshop.com/?utm_source=TheDevCoulple&utm_medium=Partner'><img src='https://raw.githubusercontent.com/ahmadawais/shades-of-purple-vscode/master/images/wpc_mts.png' /></a></td>
		<td width='333.33'><a target='_blank' href='https://ahmda.ws/USES_LiquidWeb?utm_source=TheDevCoulple&utm_medium=Partner'><img src='https://raw.githubusercontent.com/ahmadawais/shades-of-purple-vscode/master/images/wpc_lw.png' /></a></td>
		<td width='333.33'><a target='_blank' href='https://TheDevCoulple.com/contact?utm_source=TheDevCoulple&utm_medium=Partner'><img src='https://raw.githubusercontent.com/ahmadawais/shades-of-purple-vscode/master/images/wpc_cby.png' /></a></td>
	</tr>
</table>

<br>

![Thanks](https://on.ahmda.ws/orkW/c)

## License & Attribution

**Licensed** as MIT ⓒ [Ahmad Awais](https://AhmadAwais.com/).

Thanks to the creators of Slack and Icons8 for the icons in this readme.

_Say 👋 on Twitter_ →  [![Tweet for help](https://img.shields.io/twitter/follow/mrahmadawais.svg?style=social&label=Tweet%20@MrAhmadAwais)](https://twitter.com/mrahmadawais/)
