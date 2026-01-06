// Show true Mozilla financials
var wdd_div = document.createElement("div");
Object.assign(wdd_div.style, {
  position:        "fixed",
  top:             "16px",
  left:            "50%",
  transform:       "translateX(-50%)",         // true horizontal centering
  minWidth:        "420px",
  maxWidth:        "580px",
  minHeight:       "72px",
  backgroundColor: "#2c2c2e",                   // classy dark grey / near-black
  color:           "#e0e0e0",                   // light text
  borderRadius:    "10px",
  boxShadow:       "0 6px 24px rgba(0,0,0,0.5)",
  zIndex:          "9999",
  opacity:         "0.96",
  padding:         "16px 20px 16px 20px",
  fontFamily:      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  fontSize:        "14px",
  lineHeight:      "1.45",
  display:         "flex",
  alignItems:      "center",
  justifyContent:  "center",
  boxSizing:       "border-box",
});

// Close button
var closeBtn = document.createElement("button");
Object.assign(closeBtn.style, {
  position:        "absolute",
  top:             "8px",
  right:           "10px",
  background:      "none",
  border:          "none",
  color:           "#aaa",
  fontSize:        "18px",
  fontWeight:      "bold",
  cursor:          "pointer",
  padding:         "4px 8px",
  lineHeight:      "1",
  borderRadius:    "4px",
});
closeBtn.innerHTML = "&times;";
closeBtn.title = "Close";
closeBtn.onclick = function() { 
  wdd_div.remove(); 
};
wdd_div.appendChild(closeBtn);

// Display the true financial data
var content = document.createElement("div");
content.style.textAlign = "center";
content.innerHTML = 
  '<div style="font-weight: 600; font-size: 15px; margin-bottom: 6px;">' +
    '<strong>Mozilla Financials (As of 2024)</strong>' +
  '</div>' +
  '<div style="margin-bottom: 4px;">' +
    'Revenue: <strong>$653 Million</strong> ' +
    '| Total Assets: <strong>$1.4 Billion</strong> <br>' +
    'CEO Pay: <strong>$6.2 Million</strong></strong>' +
  '</div>' +
  '<div style="font-size: 13px; opacity: 0.9;">' +
    'Sources: ' +
    '<a href="https://assets.mozilla.net/annualreport/2024/b200-mozilla-foundation-form-990-public-disclosure-ty23.pdf" ' +
       'target="_blank" ' +
       'style="color: #a5d8ff; text-decoration: none; border-bottom: 1px dotted #a5d8ff;">' +
       'IRS Form 990' +
    '</a>, ' +
    '<a href="https://assets.mozilla.net/annualreport/2024/mozilla-fdn-2023-fs-final-short-1209.pdf" ' +
       'target="_blank" ' +
       'style="color: #a5d8ff; text-decoration: none; border-bottom: 1px dotted #a5d8ff;">' +
       'Annual Report' +
    '</a>' +
  '</div>';

// Hover effect for links
content.querySelectorAll('a').forEach(a => {
  a.onmouseenter = () => { a.style.color = "#4dabf7"; };
  a.onmouseleave = () => { a.style.color = "#a5d8ff"; };
});

wdd_div.appendChild(content);
document.body.appendChild(wdd_div);

// Sneed Image Box
var triggerImg = document.createElement("img");
triggerImg.src = "https://avatars.githubusercontent.com/u/86988934?s=200&v=4";
Object.assign(triggerImg.style, {
  position: "fixed",
  bottom: "16px",
  left: "16px",
  width: "64px",
  height: "64px",
  cursor: "pointer",
  zIndex: "9999",
  transition: "transform 0.0s",
  boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
});
triggerImg.title = "Click to open Sneed's Feed and Seed";
triggerImg.onmouseenter = () => { triggerImg.style.transform = "scale(1.1)"; };
triggerImg.onmouseleave = () => { triggerImg.style.transform = "scale(1)"; };

document.body.appendChild(triggerImg);

var sneed_div = document.createElement("div");
Object.assign(sneed_div.style, {
  position: "fixed",
  bottom: "90px", // Positions it above the 64px image + padding
  left: "16px",
  minWidth: "300px",
  maxWidth: "350px",
  backgroundColor: "#cfbd1bff",
  color: "#000000ff",
  borderRadius: "10px",
  boxShadow: "0 6px 24px rgba(0,0,0,0.5)",
  zIndex: "9999",
  opacity: "0.96",
  padding: "16px 20px 16px 20px",
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  fontSize: "14px",
  lineHeight: "1.45",
  display: "none", // Hidden by default
  flexDirection: "column",
  boxSizing: "border-box",
});

var sneedCloseBtn = document.createElement("button");
Object.assign(sneedCloseBtn.style, {
  position: "absolute",
  top: "4px",
  right: "8px",
  background: "none",
  border: "none",
  color: "#aaa",
  fontSize: "16px",
  fontWeight: "bold",
  cursor: "pointer",
  padding: "0 4px",
  lineHeight: "1",
});
sneedCloseBtn.innerHTML = "&times;";
sneedCloseBtn.title = "Close";
sneedCloseBtn.onclick = function(e) {
  e.stopPropagation(); // Prevent bubbling
  sneed_div.style.display = "none";
};
sneed_div.appendChild(sneedCloseBtn);

// Sneed's Content
var sneedContent = document.createElement("div");
sneedContent.innerHTML =
  '<div style="font-weight: 600; font-size: 15px; margin-bottom: 8px; padding-right: 15px;">' +
  'Sneed\'s Feed and Seed, powered by CLEANITUPJANNY 1.0.' +
  '</div>' +
  '<div style="font-size: 13px; opacity: 0.9;">' +
  '<i>(listen to this <a href="https://www.youtube.com/watch?v=cNyzjQtgJjA" target="_blank" ' + // JANNY ARE YOU OKAY
  'style="color: #a5d8ff; text-decoration: none; border-bottom: 1px dotted #a5d8ff;">' +
  'banger' +
  '</a> tho o algo)</i>' +
  '</div>';

sneedContent.querySelectorAll('a').forEach(a => {
  a.onmouseenter = () => { a.style.color = "#4dabf7"; };
  a.onmouseleave = () => { a.style.color = "#a5d8ff"; };
});

sneed_div.appendChild(sneedContent);
document.body.appendChild(sneed_div);

triggerImg.onclick = function(e) {
  e.stopPropagation();
  // Toggle display
  if (sneed_div.style.display === "none") {
    sneed_div.style.display = "flex";
  } else {
    sneed_div.style.display = "none";
  }
};

// Close the panel if clicking outside of it
document.addEventListener('click', function(e) {
  if (sneed_div.style.display !== "none" && 
      !sneed_div.contains(e.target) && 
      e.target !== triggerImg) {
    sneed_div.style.display = "none";
  }
});