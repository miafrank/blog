import { React, useState, useEffect } from 'react';
import Header from '../components/Header';
import { blogList } from '../config/Api';
import NavBar from '../components/NavBar';

const HomePage = ({ data }) => {
    const [blogs, setBlogs] = useState([]);
    const [searchKey, setSearchKey] = useState('');

    const handleSearchBar = (e) => {
        e.preventDefault();
        handleSearchResults();
    };

    const handleSearchResults = () => {
        const filtered = blogs.filter((blog) => {
            return blog.tags[0].name.toLowerCase().includes(searchKey.toLowerCase());
        });
        setBlogs(filtered);
    };

    const handleClearSearch = () => {
        blogList().then((res) => {
            setBlogs(res);
        });
        setSearchKey('');
    };


    useEffect(() => {
        blogList().then((res) => {
            setBlogs(res);
        })
    }, []);

    return (
        // <div class="flex flex-col h-screen">
        <div class="overflow-y-auto">
            <NavBar
                value={searchKey}
                clearSearch={handleClearSearch}
                formSubmit={handleSearchBar}
                handleSearchKey={(e) => setSearchKey(e.target.value)} />
            <div>
                <p class="mb-3 text-left leading-loose text-gray-500 dark:text-gray-400">
                    About Me:

                    “Ingredients for life,” said the backside of the truck. They mean food, but really food is only 1 ingredient of life. Life has so many more ingredients such as pain, happiness, laughter, joy, tears, and smiles. Life also has hard work, easy play, sleepless nights, and sunbathing by the ocean. Love, hatred, envy, self-assurance, and fear could be just down aisle 3 ready to be bought when needed. How I wish I could pull ingredients like these off shelves in a store.
                    Trees. It was something about the trees. The way they swayed with the wind in unison. The way they shaded the area around them. The sounds of their leaves in the wind and the creaks from the branches as they sway, The trees were making a statement that I just couldn't understand.

                    A two-inch layer of freshly fallen snow covered the yard. Stacey peeked outside. To most, it would have been a beautiful sight worthy of taking a photo to put on Instagram. For Stacey, it meant something different. The first snow of the year brought back the witches as the fairies in the yard had to seek shelter to avoid the cold.
                    The river slowly meandered through the open space. It had hidden secrets that it didn't want to reveal. It had a well-planned strategy to appear calm, inviting, and appealing. That's how the river lured her unknowing victims to her water's edge.
                    Love isn't always a ray of sunshine. That's what the older girls kept telling her when she said she had found the perfect man. She had thought this was simply bitter talk on their part since they had been unable to find true love like hers. But now she had to face the fact that they may have been right. Love may not always be a ray of sunshine. That is unless they were referring to how the sun can burn.
                    "It doesn't take much to touch someone's heart," Daisy said with a smile on her face. "It's often just the little things you do that can change a person's day for the better." Daisy truly believed this to be the way the world worked, but she didn't understand that she was merely a robot that had been programmed to believe this.
                    There was a reason for her shyness. Everyone assumed it had always been there but she knew better. She knew the exact moment that the shyness began. It had been that fateful moment at the lake. There are just some events that do that to you.

                    She had been an angel for coming up on 10 years and in all that time nobody had told her this was possible. The fact that it could ever happen never even entered her mind. Yet there she stood, with the undeniable evidence sitting on the ground before her. Angels could lose their wings.
                    Lori lived her life through the lens of a camera. She never realized this until this very moment as she scrolled through thousands of images on your computer. She could remember the exact moment each photo was taken. She could remember where she had been, what she was thinking as she tried to get the shot, the smells of the surrounding area, and even the emotions that she felt taking the photo, yet she had trouble remembering what she had for breakfast.
                    He couldn't move. His head throbbed and spun. He couldn't decide if it was the flu or the drinking last night. It was probably a combination of both.
                    There was something beautiful in his hate. It wasn't the hate itself as it was a disgusting display of racism and intolerance. It was what propelled the hate and the fact that although he had this hate, he didn't understand where it came from. It was at that moment that she realized that there was hope in changing him.
                    It was a simple green chair. There was nothing extraordinary about it or so it seemed. It was the type of chair one would pass without even noticing it was there, let alone what the actual color of it was. It was due to this common and unassuming appearance that few people actually stopped to sit in it and discover its magical powers.
                </p>
            </div>
        </div>
    );
};
export default HomePage;
