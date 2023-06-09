# cargo rustc

> ரஸ்ட் தொகுப்பைத் தொகுத்து, கூடுதல் விருப்பங்களை கம்பைலருக்கு அனுப்பவும்.
> மேலும் விவரத்திற்கு: <https://doc.rust-lang.org/cargo/commands/cargo-rustc.html>.

- தற்போதைய வேலை கோப்பகத்தில் `Cargo.toml` மேனிஃபெஸ்ட் கோப்பால் வரையறுக்கப்பட்ட தொகுப்பு அல்லது தொகுப்புகளை உருவாக்கவும்:

`cargo rustc`

- மேம்படுத்தல்களுடன், வெளியீட்டு பயன்முறையில் கலைப்பொருட்களை உருவாக்கவும்:

`cargo rustc --release`

- தற்போதைய CPUக்கான கட்டமைப்பு-குறிப்பிட்ட மேம்படுத்தல்களுடன் தொகுக்கவும்:

`cargo rustc --release -- -C target-cpu=native`

- வேக உகப்பாக்கத்துடன் தொகுக்கவும்:

`cargo rustc -- -C opt-level {{1|2|3}}`

- [s]ize (அளவு) ஆப்டிமைசேஷன் மூலம் தொகுக்கவும் (`z` லூப் வெக்டரைசேஷனையும் முடக்குகிறது):

`cargo rustc -- -C opt-level {{s|z}}`

- உங்கள் தொகுப்பு பாதுகாப்பற்ற குறியீட்டைப் பயன்படுத்துகிறதா எனச் சரிபார்க்கவும்:

`cargo rustc --lib -- -D unsafe-code`

- ஒரு குறிப்பிட்ட தொகுப்பை உருவாக்கவும்:

`cargo rustc --package {{தொகுப்பு}}`

- குறிப்பிட்ட பைனரியை மட்டும் உருவாக்கவும்:

`cargo --bin {{பெயர்}}`
