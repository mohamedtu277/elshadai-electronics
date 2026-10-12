# Elshadise Enterprises — Frontend v2

Responsive electronics shop frontend with a clean white and blue retail design.

## Files
- `index.html` — page structure
- `style.css` — responsive styling
- `app.js` — sample catalogue, filters, wishlist, cart and checkout demo

## Run on Windows
1. Extract the ZIP.
2. Open the extracted `elshadise-frontend` folder in VS Code.
3. Install the VS Code extension **Live Server** (if needed).
4. Right-click `index.html` → **Open with Live Server**.

You can also double-click `index.html` to open it directly, though Live Server is recommended.

## Test on your phone using the same Wi-Fi
1. Run Live Server in VS Code.
2. In Windows Command Prompt, run `ipconfig` and note the active Wi-Fi IPv4 address.
3. On your phone on the same Wi-Fi, visit `http://PC-IP-ADDRESS:5500`.
4. If it does not load, allow VS Code / Live Server through Windows Firewall on Private networks.

## Configure WhatsApp
In `app.js`, replace:
`const WHATSAPP_NUMBER="232XXXXXXXX";`
with your business WhatsApp number, digits only, international format (for Sierra Leone start with 232; do not type + or spaces).

## Before launch
- Sample products, prices and remote product photos are placeholders; update them to your real inventory.
- This is frontend-only. Website checkout currently shows a preview alert and does not save orders.
- WhatsApp ordering opens a prefilled WhatsApp message once the number is configured.
- No customer login, admin panel, database, stock management, delivery calculation or payment gateway is connected yet.
- Payment logos/text are illustrative only; do not advertise a payment method until it is actually integrated.
- The design uses Google Fonts and remote Unsplash images; internet access is needed for those assets.
