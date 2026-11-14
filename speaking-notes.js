'use strict';

// Prepared notes follow the same order as the 18 curated topics in app.js.
// Examples are illustrative, not research findings or personal experiences.
const librarySpeakingNotes = [
  {
    explanation: 'Doing nothing means taking a break without trying to achieve something. It can feel uncomfortable when we are used to constant entertainment and pressure to be productive.',
    opening: 'Think about the last time you had five minutes free. Did you relax, or immediately reach for your phone?',
    points: ['We often fill quiet moments automatically. Checking a phone can become a habit even when there is nothing important to check.', 'Rest does not need to produce a result to be valuable. A break can simply give us space to notice how we feel.', 'An unplanned moment can give us room to think. That does not guarantee a brilliant idea, but it allows our attention to move away from constant tasks.'],
    example: 'Imagine waiting for a friend. Instead of opening an app, you look around and notice a conversation, a building, or an idea you had forgotten. The wait becomes a different experience.',
    closing: 'My takeaway is simple: we can value our time without filling every minute. Sometimes a small pause is enough.'
  },
  {
    explanation: 'Shared spaces work through both written rules and unspoken expectations. Problems happen when people assume everyone has the same idea of respect.',
    opening: 'A room can belong to several people, but each person may have a different idea of how it should be used.',
    points: ['People have different expectations about noise, cleanliness, and privacy. What feels normal to one person may bother someone else.', 'Unwritten rules are difficult for newcomers to follow. Explaining an expectation is often more useful than assuming someone is careless.', 'Fair agreements give everyone a voice. A rule works better when people understand its reason and can discuss exceptions.'],
    example: 'Imagine two roommates. One studies at night while the other needs quiet to sleep. Agreeing on headphones and quiet hours gives both people a practical way forward.',
    closing: 'Sharing a space is not just about sharing its cost. It is about making expectations clear enough for everyone to feel comfortable.'
  },
  {
    explanation: 'A familiar place can feel different because both the place and the person returning have changed. Memory also highlights some details and leaves others out.',
    opening: 'Have you returned to an old classroom and felt that it looked smaller than you remembered?',
    points: ['Places change physically. New buildings, different people, and changed routines can make a familiar street feel unfamiliar.', 'We change too. Growing older or living somewhere else gives us new experiences to compare with the past.', 'Memory carries emotion as well as detail. Missing a time in our life can feel like missing the place itself.'],
    example: 'Imagine visiting your old school after several years. The playground is still there, but your friends and daily routine are gone. The location remains familiar while the experience is new.',
    closing: 'Returning home does not always mean returning to the past. We can appreciate an old place while allowing it to mean something new.'
  },
  {
    explanation: 'A phone can help us communicate and learn, but an app can also encourage us to stay longer than intended. This topic asks whether good design should help us leave when our task is finished.',
    opening: 'Imagine opening your phone to check one message and looking up much later. Was that extra time your choice?',
    points: ['Useful features help us complete a task. Features such as endless feeds can make it harder to find a natural stopping point.', 'Businesses may benefit from attention through advertising or subscriptions. Their goals do not always match a user’s wish to spend less time online.', 'Design could offer more control through quieter notifications, clear stopping points, and limits chosen by the user.'],
    example: 'Imagine a study app that ends a session with a clear summary instead of immediately suggesting another activity. It helps the student finish rather than stay indefinitely.',
    closing: 'A good phone should support what we want to do. Spending less time on it could sometimes be a sign that it works well.'
  },
  {
    explanation: 'When someone uses AI to create text, images, or music, several contributions are involved. Ownership and credit can become complicated, and legal rules depend on the context and jurisdiction.',
    opening: 'If a person writes a prompt and AI produces an image, who should receive the creative credit?',
    points: ['The person may contribute the idea, instructions, selection, and editing. These decisions can shape the final result.', 'The AI system also depends on its developers and training process. That raises questions about how other creators’ work has contributed.', 'Credit, permission, and legal ownership are different questions. A fair conversation should separate them instead of assuming there is one simple answer.'],
    example: 'Imagine a student using AI to draft a poster, then rewriting the text and redesigning the layout. Explaining which parts were AI-assisted helps an audience understand the student’s contribution.',
    closing: 'The practical starting point is transparency: explain the human contribution and the tool’s role, while checking applicable rules when ownership matters.'
  },
  {
    explanation: 'Online information is not automatically permanent. Websites close, files disappear, and links stop working, which can make old knowledge and cultural records harder to access.',
    opening: 'We often say that the internet never forgets. But what happens when the link we need no longer works?',
    points: ['A website needs people, money, and technical maintenance. When that support ends, its information may disappear.', 'Losing a page can mean losing evidence, memories, or local history. A missing source makes it harder to check what happened.', 'Archives and backups can help, but preservation also involves choices about privacy, permission, and what should be kept.'],
    example: 'Imagine a school club storing all its photographs on one website. If that service closes and nobody has copies, years of the club’s history could become inaccessible.',
    closing: 'Digital information needs care just like a physical record. If something matters, we should think about how it will remain accessible.'
  },
  {
    explanation: 'A forest reuses materials and connects many living things. A city cannot literally become a forest, but its designers can learn from these relationships.',
    opening: 'What if we designed a city by asking how a forest uses water, space, and resources?',
    points: ['Natural systems reuse materials. Cities can apply that idea by repairing products, recovering useful materials, and reducing waste.', 'Trees, plants, and permeable ground can play a role in how a neighbourhood handles heat and rain. The right design depends on local conditions.', 'A city is a connected system. Transport, housing, water, and green spaces work better when their effects on one another are considered.'],
    example: 'Imagine a campus collecting rainwater for its garden and composting suitable food scraps. These are small ways to connect resources that would otherwise be treated separately.',
    closing: 'Learning from forests does not mean copying their appearance. It means thinking more carefully about connections, reuse, and local needs.'
  },
  {
    explanation: 'Clock time moves at the same rate, but our experience of it can change. Attention, routine, and the memories we form may influence how long a period feels, especially when we look back.',
    opening: 'A short holiday can leave many memories, while a routine month can seem to disappear. Why might that happen?',
    points: ['A new experience gives us unfamiliar details to notice. Those details can make a period feel richer when we remember it.', 'Repeated routines may blend together in memory. That is one possible reason several similar weeks can feel like one.', 'This is not a single explanation for everyone. Stress, enjoyment, attention, and context can also change how time feels.'],
    example: 'Compare a week of identical classes with a week that includes a new hobby, a trip, or a meaningful conversation. Both last seven days, but they may leave different memories.',
    closing: 'We cannot slow a clock, but we can sometimes make our days more memorable by paying attention and adding small new experiences.'
  },
  {
    explanation: 'Soil is more than loose dirt. It contains minerals, water, air, and living organisms that interact with plants and decaying material.',
    opening: 'We notice the plants above the ground, but how often do we think about the system supporting them underneath?',
    points: ['Soil supports plant growth by providing a place for roots and helping make water and nutrients available.', 'Organisms in soil help break down dead material. This process returns useful materials to the surrounding environment.', 'Soil can be damaged by erosion, pollution, or being covered. Looking after it is part of looking after gardens, farms, and local ecosystems.'],
    example: 'Imagine a garden where fallen leaves are composted and returned to the ground. Instead of being only waste, that material becomes part of caring for the soil.',
    closing: 'Healthy surroundings begin below the surface too. Soil deserves attention because so much of the life we see depends on it.'
  },
  {
    explanation: 'A public space is a place intended for shared use. Whether it truly feels open to everyone depends on access, comfort, safety, and whose needs were considered.',
    opening: 'A park may be open to everyone on paper. Does that mean everyone can use it equally?',
    points: ['Physical access matters. Steps, narrow paths, or a lack of seating can exclude people even without an explicit rule.', 'Comfort and safety affect use. Lighting, toilets, shade, and clear information can change who feels able to stay.', 'Users should help shape the space. Listening to children, older people, disabled people, and nearby residents reveals needs a designer might miss.'],
    example: 'Imagine a campus courtyard with only stairs and no shade. Adding an accessible path and places to rest makes it more useful to a wider range of people.',
    closing: 'A shared space belongs to everyone only when different people can actually use it. Good access turns that promise into something practical.'
  },
  {
    explanation: 'Listening is more than staying silent while another person talks. It includes paying attention, checking understanding, and responding to what was actually said.',
    opening: 'Have you ever finished explaining something and realised the other person was only waiting for their turn to speak?',
    points: ['Careful listening helps us understand before reacting. Asking a clarifying question can prevent an avoidable misunderstanding.', 'It can be practised through simple habits, such as summarising another person’s idea without changing its meaning.', 'Teaching listening should respect different communication needs. Eye contact or speaking quickly is not the only sign that someone is engaged.'],
    example: 'Imagine a group project disagreement. Before defending their own plan, each student explains the other person’s concern. They may discover that they agree about the goal but not the method.',
    closing: 'Schools teach us how to express ideas. Giving attention to how we receive ideas could make conversations and teamwork more useful too.'
  },
  {
    explanation: 'A local language can carry family stories, expressions, and ways of describing the world. When fewer people speak it, access to that shared knowledge can become harder.',
    opening: 'Think of a word or expression your family uses that never sounds quite the same in another language.',
    points: ['Language helps people share identity and belonging. Using a family language can connect a person with earlier generations.', 'Some expressions and knowledge lose detail in translation. Recording words without their context may not preserve their full meaning.', 'Keeping a language active requires opportunities to use it. Stories, teaching, community events, and useful digital tools can all contribute.'],
    example: 'Imagine a grandparent recording a local story and explaining unusual words to a younger relative. The recording preserves a voice, while the conversation keeps the language in use.',
    closing: 'Protecting a language is not only about keeping a dictionary. It is also about giving people reasons and opportunities to keep speaking it.'
  },
  {
    explanation: 'A remake retells an existing story for a different audience or time. It can preserve familiar elements while changing the setting, viewpoint, or message.',
    opening: 'Why watch a new version of a story when we already know how the old one ends?',
    points: ['Familiar stories offer a shared starting point. An audience can recognise a character while noticing how the new version changes them.', 'A new generation brings different experiences and questions. A retelling can explore a viewpoint that received little attention before.', 'Change has trade-offs. A remake may gain relevance while losing something that made the original distinctive.'],
    example: 'Imagine retelling a familiar fairy tale from the viewpoint of a minor character. The main events could stay similar, but the audience would understand their consequences differently.',
    closing: 'A remake earns its place when it gives us a meaningful new way to see the story. Familiarity can be a starting point for creativity.'
  },
  {
    explanation: 'Some objects matter because of the people, events, and memories connected to them. Their emotional value may have little to do with their practical use or price.',
    opening: 'An old ticket may be worthless to a stranger and priceless to the person who kept it. What makes the difference?',
    points: ['Objects can act as reminders. Seeing a familiar item may bring back a person, a place, or a moment.', 'Keeping an object can preserve a family story. Explaining that story helps others understand why the item matters.', 'Keeping everything is not always possible. Photographs or written memories can sometimes preserve meaning without preserving every physical object.'],
    example: 'Imagine someone keeping a broken watch that belonged to a relative. They are not saving it to tell the time; they are saving a connection to that person.',
    closing: 'Before judging an object by its usefulness, we can ask what story it holds. Sometimes the thing being kept is really a memory.'
  },
  {
    explanation: 'A handwritten letter combines words with physical choices such as handwriting, spacing, and paper. Those choices can make it a form of personal creative expression.',
    opening: 'A message can arrive instantly. So why might someone still choose to sit down and write a letter by hand?',
    points: ['Writing by hand can show deliberate care. The time and choices involved may become part of the message.', 'Handwriting carries visual detail. Crossed-out words and uneven lines can reveal a process that a polished digital message hides.', 'The medium affects the experience, but it does not decide the quality. A digital message can also be thoughtful and creative.'],
    example: 'Imagine receiving a letter that includes a small sketch and a remembered joke. The words matter, but the arrangement and personal marks add another layer of meaning.',
    closing: 'A letter does not need to replace instant messages. It offers another way to turn communication into something personal and worth keeping.'
  },
  {
    explanation: 'A repair business earns money by helping products stay useful for longer. Its success depends on the cost of repair, access to parts, and customers’ trust.',
    opening: 'When something breaks, replacing it can feel easier. What would make repairing it the better choice?',
    points: ['Repair can help people avoid buying a replacement, but it must be affordable enough to make sense for the customer.', 'Good repair needs suitable parts, knowledge, and time. A product that is difficult to open can make even a small fault expensive to fix.', 'Trust is essential. Clear prices, honest advice, and an explanation of the work help people decide whether a repair is worthwhile.'],
    example: 'Imagine a student with a bag whose zip has broken. A reasonably priced zip repair could keep the bag useful without replacing the whole item.',
    closing: 'Repair becomes a stronger business when it solves a practical problem at a fair price. Longer product life can be part of the value it sells.'
  },
  {
    explanation: 'A student-friendly business solves a real problem while respecting limited budgets and busy schedules. Starting small helps test whether the solution is actually useful.',
    opening: 'A business idea does not have to begin with a new invention. It can begin with a problem students face every week.',
    points: ['Start by listening to students. A repeated inconvenience is more useful evidence than an idea that only sounds impressive.', 'Test a small version before spending heavily. A simple trial can reveal whether people will use and pay for the service.', 'Affordability must work for both sides. A low price is not sustainable if it cannot cover the basic cost of providing the service.'],
    example: 'Imagine a campus clothing-repair pickup service. Before renting a shop, its founder could organise one pickup day and see how many students actually book a repair.',
    closing: 'A useful student business begins with a specific need, a small test, and honest pricing. Understanding the customer matters more than making the idea look impressive.'
  },
  {
    explanation: 'Convenience saves time or effort, but its full cost may include money, packaging, working conditions, or habits we did not intend to develop.',
    opening: 'Ordering something in seconds feels easy. But whose time and work make that convenience possible?',
    points: ['Convenience has visible costs, such as delivery charges or subscriptions. Small repeated payments can affect a personal budget.', 'It can also shift effort onto other people or create extra waste. The details depend on how a service is organised.', 'Convenience is not automatically bad. The useful question is when the time saved is worth the trade-offs, especially for people with different access needs.'],
    example: 'Imagine ordering one inexpensive item with separate packaging and delivery. Combining orders might be less immediate but could reduce some of the extra cost and material.',
    closing: 'We do not need to reject every convenient service. We can make a more deliberate choice by asking what we gain and what else is involved.'
  }
];
