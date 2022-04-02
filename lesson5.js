function spinalCase(str) {
  return str.replace(/^[\W_]+|[\W_]+$|([\W_]+)/g, function ($0, $1) {
              return $1 ? "-" : "";
         }).replace(/([a-z])(?=[A-Z])/g, '$1-').toLowerCase();
}

spinalCase('This Is Spinal Tap');
