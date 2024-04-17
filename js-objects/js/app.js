console.log('js loaded')

const game = {
    title: 'Guess the number',
    biggestNum: 100

}

// get values

game.title // This would get the value "Guess the number"
// if we want to lof to the console
console.log(game.title)

console.log(game['title'])

// set values

game.biggestNum = 50;

// add keys to the objects
game.lowestNum = 10;
game['guessedNumber'] = 6

console.log(game)

const jobPosting = {

    job: 'MicroBiologist - Night Shift (Crown Point, In)',
    compensation: 'DOE',
    employmentType: 'full-time'
    jobBlurb: 'text describing the job'
}

// Model an instagram post as an object

const instaPost = {
	username: 'alexhonnold',
	isVerified: true,
	pictures: ['pic 1', 'pic 2', 'pic3'],
	likeCount: 41621,
	caption: '@james_lucas took some pictures of a typical sport climbing day from this month - I've been settled into home life ...',
	comments: [
		{username: 'pipenhon', comment: 'Why you use a rope'},
		{username: 'the northFaceClimb', comment: '13 a warm up'},
		{username: 'collingill17', comment: 'Alex delete last pic'}
	]
}