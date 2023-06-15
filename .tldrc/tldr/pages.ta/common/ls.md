# ls

> அடைவு உள்ளடக்கத்தைப் பட்டியலிடு.
> மேலும் விவரத்திற்கு: <https://www.gnu.org/software/coreutils/ls>.

- கோப்புகளை வரிக்கொன்றாகப் பட்டியலிடு:

`ls -1`

- மறைவான கோப்புகளுட்பட அனைத்துக் கோப்புகளையும் பட்டியலிடு:

`ls -a`

- கோப்பகப் பெயர்களில் சேர்க்கப்பட்டுள்ள `/` உடன் அனைத்து கோப்புகளையும் பட்டியலிடுங்கள்:

`ls -F`

- அனைத்துக் கோப்புகளையும் முழு விவரங்களுடன் (அனுமதி, உடைமை, கோப்பளவு, மாற்றமைத்தத் தேதி) பட்டியலிடு:

`ls -la`

- கோப்பளவு படிப்பதற்கெளிய அலகுகளில் (KiB, MiB, GiB) காண்பிக்கப்பட்ட முழு விவரப் பட்டியல்:

`ls -lh`

- கோப்பளவால் இறங்குமுகமாக வரிசைப்படுத்தப்பட்ட முழு விவரப் பட்டியல்:

`ls -lS`

- மாற்றமைத்தத் தேதியால் காலவரிசைப்படுத்தப்பட்ட (பழையதிலிருந்துத் துவங்கி) முழு விவரப் பட்டியல்:

`ls -ltr`

- கோப்பகங்களை மட்டும் பட்டியலிடுங்கள்:

`ls -d */`