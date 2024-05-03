import React from 'react';

function HadithContent() {
  const hadithText = "This is the Hadith text content...";
  const narrator = "Narrator Name";

  return (
    <div className="bg-gray-100 p-4 rounded shadow-md">
      <p className="text-xl font-medium">{hadithText}</p>
      <p className="text-sm mt-4"> narrated by {narrator}</p>
    </div>
  );
}

export default HadithContent;