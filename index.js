/**
 * Shades of Purple for Hyper™.
 *
 * Professional Hyper™ Terminal theme with hand-picked
 * & bold shades of purple 💜 to go along with your
 * command line usage. A custom Hyper™ Terminal theme
 * with style.
 */
// Standard ANSI Colors.
const black = '#000000';
const red = '#D90429';
const green = '#3ad900';
const yellow = '#FAD000';
const blue = '#6943ff';
const magenta = '#ff2c70';
const cyan = '#80fcff';
const white = '#c7c7c7';
const lightBlack = '#808080';
const lightRed = '#ff0000';
const lightGreen = '#33ff00';
const lightYellow = '#ffff00';
const lightBlue = '#0066ff';
const lightMagenta = '#cc00ff';
const lightCyan = '#00ffff';
const lightWhite = '#ffffff';

// Few custom colors.
const sopPurpleBG = '#1E1D40';
const variableBlue = '#2D2B55';
const dustyBlue = '#b362ff';
const highlightBlue = '#b362ff88';

exports.decorateConfig = config =>
	Object.assign({}, config, {
		cursorColor: yellow,
		foregroundColor: white,
		backgroundColor: sopPurpleBG,
		borderColor: 'rgba(255,255,255,0.05)',
		css: `
            ${config.css || ''}
            .tab_tab:before {
                border-left: 1px solid;
            }
            .tab_active {
                background: rgba(255,255,255,0.05);
            }
            .tab_active:before {
                border-color: ${yellow};
            }
        `,
		colors: {
			black,
			red,
			green,
			yellow,
			blue,
			magenta,
			cyan,
			white,
			lightBlack,
			lightRed,
			lightGreen,
			lightYellow,
			lightBlue,
			lightMagenta,
			lightCyan,
			lightWhite
		}
	});
