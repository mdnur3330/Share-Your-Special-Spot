// 








import React from 'react';

const artifacts = [
  { id: 1, name_en: 'Rosetta Stone', name_bn: 'রোজেটা ফলক', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Rosetta_Stone.JPG/320px-Rosetta_Stone.JPG' },
  { id: 2, name_en: "Tutankhamun’s Mask", name_bn: 'তুতানখামুনের মুখোশ', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Tutmask.jpg/320px-Tutmask.jpg' },
  { id: 3, name_en: 'Canopic Jars', name_bn: 'ক্যানোপিক পাত্র', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Canopic_jars_-_mfa_boston.jpg/320px-Canopic_jars_-_mfa_boston.jpg' },
  { id: 4, name_en: 'Book of the Dead', name_bn: 'মৃত্যুর পুস্তক', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Book_of_the_Dead_of_Hunefer_Papyrus_BM_EA9999_1.jpg/320px-Book_of_the_Dead_of_Hunefer_Papyrus_BM_EA9999_1.jpg' },
  { id: 5, name_en: 'Anubis Statue', name_bn: 'আনুবিস মূর্তি', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Anubis_jackal_Statue_Metropolitan_Museum.jpg/320px-Anubis_jackal_Statue_Metropolitan_Museum.jpg' },
  { id: 6, name_en: 'Eye of Horus Amulet', name_bn: 'হোরাসের চোখ তাবিজ', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Eye_of_Horus_amulett.jpg/320px-Eye_of_Horus_amulett.jpg' },
  { id: 7, name_en: 'Narmer Palette', name_bn: 'নারমার ফলক', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Narmer_Palette_MET_24.2.1.jpg/320px-Narmer_Palette_MET_24.2.1.jpg' },
  { id: 8, name_en: 'Statue of Ramses II', name_bn: 'রামসেস দ্বিতীয়ের মূর্তি', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Colossus_of_Ramesses_II.jpg/320px-Colossus_of_Ramesses_II.jpg' },
  { id: 9, name_en: 'Cartouche of Cleopatra', name_bn: 'ক্লিওপেট্রার কারটুশ', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Cleopatra_-_Cartouche.jpg/320px-Cleopatra_-_Cartouche.jpg' },
  { id: 10, name_en: 'Scarab Amulet', name_bn: 'স্ক্যারাব তাবিজ', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Scarab_amulet_Metropolitan_Museum_07.160.2034.jpg/320px-Scarab_amulet_Metropolitan_Museum_07.160.2034.jpg' },
];

const ArtifactCard = ({ artifact }) => (
  <div className="max-w-xs rounded overflow-hidden shadow-lg m-4 border border-gray-200">
    <img className="w-full h-48 object-cover" src={artifact.img} alt={artifact.name_en} />
    <div className="px-4 py-2">
      <h3 className="font-bold text-lg">{artifact.name_bn}</h3>
      <p className="text-gray-600">{artifact.name_en}</p>
    </div>
  </div>
);

const ArtifactGrid = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {artifacts.map((artifact) => (
        <ArtifactCard key={artifact.id} artifact={artifact} />
      ))}
    </div>
  );
};

export default ArtifactGrid;
