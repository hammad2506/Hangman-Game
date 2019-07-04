const MOVIES_LIST = ["Dark Phoenix", "Men in Black: International", "Toy Story 4", "Catarina and the others", "Shutter Island", "Aladdin", "Captain Marvel", "Murder Mystery", "Dumbo", "Alita: Battle Angel", "Avengers: Endgame", "Godzilla: King of the Monsters", "Detective Conan: The Fist of Blue Sapphire", "Avengers: Infinity War", "Shaft", "Cars", "Us", "How to Train Your Dragon: The Hidden World", "The Secret Life of Pets 2", "I Am Mother", "Forrest Gump", "Spider-Man: Far from Home", "Child's Play", "Shazam!", "Spider-Man: Into the Spider-Verse", "John Wick", "Ma", "Hotel Mumbai", "Venom", "Rocketman", "Thor", "Five Feet Apart", "Fantastic Beasts: The Crimes of Grindelwald", "Guardians of the Galaxy", "Anna", "Beats", "Thor: Ragnarok", "Mission: Impossible - Fallout", "Deadpool 2", "Ralph Breaks the Internet", "Black Panther", "Wild and Free", "The Avengers", "The Dead Don't Die", "Harry Potter and the Philosopher's Stone", "Robin Hood", "Ant-Man and the Wasp", "Green Book", "Glass", "Captive State", "Wonder Park", "The Lord of the Rings: The Fellowship of the Ring", "Escape Plan: The Extractors", "Avengers: Age of Ultron", "Captain America: Civil War", "Men in Black", "Spider-Man: Homecoming", "The Aftermath", "Pirates of the Caribbean: The Curse of the Black Pearl", "Logan", "Bumblebee", "Jurassic World: Fallen Kingdom", "Deadpool", "The Prodigy", "Master and Commander: The Far Side of the World", "Solo: A Star Wars Story", "The Grand Budapest Hotel", "Trainspotting", "Wonder Woman", "The Dark Knight", "Blade Runner 2049", "Cold Pursuit", "The Lord of the Rings: The Return of the King", "Toy Story", "Bohemian Rhapsody", "Brightburn", "Twilight", "A Star Is Born", "Annabelle: Creation", "John Wick: Chapter 2", "Incredibles 2", "Aquaman", "Zootopia", "Escape Room", "After", "Curiosa", "Interstellar", "The Hobbit: The Battle of the Five Armies", "Justice League", "The Matrix", "Mortal Engines", "X-Men: Apocalypse", "Harry Potter and the Chamber of Secrets", "Star Wars", "Doctor Strange", "Master Z: Ip Man Legacy", "Star Wars: The Last Jedi", "Inception", "Terminator Genisys", "Iron Man", "The Mule", "Frozen", "X-Men: Days of Future Past", "Toy Story 3", "Toy Story 2", "Inside Out", "Captain America: The First Avenger", "Hellboy", "Guardians of the Galaxy Vol. 2", "Hidden Figures", "Annabelle Comes Home", "Batman v Superman: Dawn of Justice", "Saving Private Ryan", "Alien: Covenant", "My Neighbor Totoro", "The Hunger Games: Mockingjay - Part 1", "Female War: A Nasty Deal", "Se7en", "Lion", "Spirited Away", "Wreck-It Ralph", "Ip Man 4", "Halloween", "Gone Girl", "Ready Player One", "The Matrix Revolutions", "Despicable Me 2", "The Shawshank Redemption", "Birdman", "Big Hero 6", "Avatar", "The Matrix Reloaded", "Men in Black II", "Parasite", "The Mask", "Beauty and the Beast", "Get Out", "Pet Sematary", "Replicas", "The Lord of the Rings: The Two Towers", "Now You See Me 2", "Tooth Fairy", "Fury", "The Beach Bum", "Whiplash", "Prometheus", "Once Upon A Time In Hollywood", "The Meg", "How to Train Your Dragon", "The Equalizer", "Cinderella", "Harry Potter and the Prisoner of Azkaban", "The Mustang", "Jurassic World", "Fight Club", "Pulp Fiction", "Ant-Man", "Hotel Transylvania 3: Summer Vacation", "The Godfather", "Sicario: Day of the Soldado", "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe", "Booksmart", "Pirates of the Caribbean: On Stranger Tides", "Ponyo", "Harry Potter and the Goblet of Fire", "Pirates of the Caribbean: Dead Man's Chest", "The Martian", "The Art of Self-Defense", "Titanic", "Kabir Singh", "The Kissing Booth", "Bird Box", "The Fate of the Furious", "The Prestige", "The Purge: Anarchy", "Den of Thieves", "Brave", "Night at the Museum: Secret of the Tomb", "Ghost in the Shell", "San Andreas", "A Quiet Place", "The Darkest Minds", "I, Tonya", "Harry Potter and the Order of the Phoenix", "Mary Poppins Returns", "Spectre", "Teenage Mutant Ninja Turtles", "The Hummingbird Project", "How to Train Your Dragon 2", "Penguins of Madagascar", "Maleficent", "Harry Potter and the Deathly Hallows: Part 2", "Creed II", "The Lego Movie 2: The Second Part", "The Equalizer 2"]

function randomMovie() {
  return MOVIES_LIST[Math.floor(Math.random() * MOVIES_LIST.length)];
}

export { randomMovie };