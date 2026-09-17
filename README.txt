WORLD OF NININ ANTO — CARD RESET PACK
========================================

WHAT THIS PACK DOES
-------------------
1. Removes the need to click only "Explore".
2. Makes the ENTIRE card clickable.
3. Adds a cinematic "entering another world" transition.
4. Keeps the Explore text as a visual call-to-action.
5. Uses the new 9-world order:
   01 Life & Mirror
   02 Acting & Direction
   03 Writer
   04 YouCanDo.Business
   05 Mission 333
   06 AI Ninin
   07 Eleven Studio Creative
   08 NA Studio
   09 Art Studio

6. Mission 333 receives a stronger visual emphasis.
7. Art Studio is the final personal/hobby world.

FILES
-----
worlds-cards.html
css/worlds-cards.css
js/worlds-cards.js

HOW TO INSTALL
--------------
This is intentionally a CARD-SECTION pack, not a replacement for your
entire homepage. Your current homepage contains other sections that should
not be overwritten.

1. In your repository, create:
   css/worlds-cards.css
   js/worlds-cards.js

2. Copy the matching files from this pack.

3. In your homepage <head>, add:
   <link rel="stylesheet" href="css/worlds-cards.css">

4. Just before </body>, add:
   <script src="js/worlds-cards.js"></script>

5. Replace the CURRENT homepage world-card section with the contents of:
   worlds-cards.html

IMAGE FILES
-----------
Create this folder:
assets/images/worlds/

Put the nine individual generated images there with these exact names:

01-life-and-mirror.jpg
02-acting-direction.jpg
03-writer.jpg
04-youcando-business.jpg
05-mission333.jpg
06-ai-ninin.jpg
07-eleven-studio-creative.jpg
08-na-studio.jpg
09-art-studio.jpg

IMPORTANT
---------
The image files are not duplicated inside this code pack because the pack is
designed to use your individual generated images as the card backgrounds.

PAGE LINKS
----------
The card links are currently:

pages/life-and-mirror.html
pages/acting-direction.html
pages/writer.html
pages/youcando-business.html
pages/mission333.html
pages/ai-ninin.html
pages/elevenstudio-creative.html
pages/na-studio.html
pages/art-studio.html

If your existing filenames differ, change ONLY the href of that card.

DO NOT change your CNAME or GitHub Pages settings for this update.

MOBILE
------
The cards automatically become one-column on mobile and the transition
works with touch taps.

ACCESSIBILITY
-------------
Cards remain keyboard accessible and respect prefers-reduced-motion.
