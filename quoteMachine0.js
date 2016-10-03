
var quoteArray = [
{"quote":"You may not always have a comfortable life and you will not always be able to solve all of the world's problems at once but don't ever underestimate the importance you can have because history has shown us that courage can be contagious and hope can take on a life of its own."},
{"quote":"My experiences at Princeton have made me far more aware of my 'blackness' than ever before. I have found that at Princeton, no matter how liberal and open-minded some of my white professors and classmates try to be toward me, I sometimes feel like a visitor on campus; as if I really don't belong."},
{"quote":"Although the circumstances of our lives may seem very disengaged, with me standing here as the First Lady of the United States of America and you just getting through school, I want you to know we have very much in common. For nothing in my life ever would have predicted that I would be standing here as the first African-American First Lady."},
{"quote":"One of the lessons that I grew up with was to always stay true to yourself and never let what somebody else says distract you from your goals."},
{"quote":"Success is only meaningful and enjoyable if it feels like your own."},
{"quote":"We learned about dignity and decency - that how hard you work matters more than how much you make... that helping others means more than just getting ahead yourself."},
{"quote":"I am an example of what is possible when girls from the very beginning of their lives are loved and nurtured by people around them. I was surrounded by extraordinary women in my life who taught me about quiet strength and dignity."},
{"quote":"I love that for Barack, there is no such thing as 'us' and 'them' - he doesn't care whether you're a Democrat, a Republican, or none of the above... he knows that we all love our country... and he's always ready to listen to good ideas... he's always looking for the very best in everyone he meets."},
{"quote":"My kids are normal. If they could eat burgers and fries and ice cream every day, they would. And so would I. But that doesn't sustain us."},
{"quote":"I am desperate for change - now - not in 8 years or 12 years, but right now."},
{"quote":"I have never felt more confident in myself, more clear on who I am as a woman. But I am constantly thinking about my own health and making sure that I'm eating right and getting exercise and watching the aches and pains. I want to be this really fly 80-90-year old."},
{"quote":"We learned about honesty and integrity - that the truth matters... that you don't take shortcuts or play by your own set of rules... and success doesn't count unless you earn it fair and square."},
{"quote":"I'm not asking any of you to make drastic changes to every single one of your recipes or to totally change the way you do business. But what I am asking is that you consider reformulating your menu in pragmatic and incremental ways to create healthier versions of the foods that we all love."},
{"quote":"It wasn't so long ago that I was a working mom myself. And I know that sometimes, much as we all hate to admit it, it's just easier to park the kids in front of the TV for a few hours, so we can pay the bills or do the laundry or just have some peace and quiet for a change."},
{"quote":"We learned about gratitude and humility - that so many people had a hand in our success, from the teachers who inspired us to the janitors who kept our school clean... and we were taught to value everyone's contribution and treat everyone with respect."},
{"quote":"The fact is, with every friendship you make, and every bond of trust you establish, you are shaping the image of America projected to the rest of the world. That is so important. So when you study abroad, you're actually helping to make America stronger."},
{"quote":"Find people who will make you better."},
{"quote":"If my future were determined just by my performance on a standardized test, I wouldn't be here. I guarantee you that."},
{"quote":"Choose people who lift you up."},
{"quote":"Sometimes, it's just easier to say yes to that extra snack or dessert, because frankly, it is exhausting to keep saying no. It's exhausting to plead with our kids to eat just one more bite of vegetables."}
];












function newQuote(){

document.getElementById("quotes").innerHTML = quoteArray[
Math.floor(Math.random() *20)
].quote;

}

function tweetit(){

window.open("http://www.twitter.com/intent/tweet?text=" + document.getElementById("quotes").innerHTML + " - " + document.getElementById("author").innerHTML);

}


