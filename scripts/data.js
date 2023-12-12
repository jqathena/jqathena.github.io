const items = [
  {
    date: "1980s",
    title: "Context",
    subtitle: "Unemployment & anti-Japanese sentiment in the auto industry and Detroit",
    text: "Detroit was in a crisis and racially charged.The manufacturing sector in America, particularly the Midwest, was hit with economic disaster during the oil crises in the 1970s. The auto industry was hit particularly hard with the onset of popular international cars that were dependable, cheap, and fuel-efficient, especially with the higher gas prices from the oil crisis. Detroit, a city dependent on the auto industry, had an unemployment rate of over 17% as hundreds of thousands of workers were laid off. Soon, the Japanese became the scapegoat. Anything Japanese was a target: people smashed Japanese cars, owners were harassed, and politicians made racial comments towards Japanese people. Detroit had a less than 1% population of Asian Americans, and the invisibility of Asian Americans was prevalent throughout the media. Asian Americans were seen as the “model minority”: hard workers who didn’t interfere with society. Previous generations of Asian American activism in the Yellow Power and Ethnic Studies movements were mostly students, and the term “Asian American” had not caught on yet."
  },
  {
    date: "19 June 1982",
    title: "Bar Room Brawl",
    subtitle:
      "Vincent Chin is beaten up by Ronald Ebens and Michael Nitz",
    text: `Vincent Chin goes to Fancy Pants, a topless bar, in Detroit with three of his friends. Ronald Ebens, a superintendent for Chrysler, and his stepson Michael Nitz, who was recently laid off after working in the auto industry, got into a fight with Chin. Dancers heard Ebens say, 'It's because of you motherf*ckers that we're out of work,' and Vincent replied, 'Don't call me a f*cker.' They were separated and removed from the bar. Ebens and Nitz continued looking for Chin afterwards, paying a man $20 to help 'get the Chinese.' After driving for around half an hour, they found Vincent with a friend outside of McDonalds. Ebens beat Vincent with a baseball bat while Nitz held him down in a bear hug. 2 off-duty police officers came and told Ebens to drop the bat.`
  },
  {
    date: "23 June 1982",
    title: "Vincent Chin's Death",
    subtitle: `4 days later, Vincent Chin dies in the hospital`,
    text: `Vincent Chin was mortally wounded from the blows. Blood, spinal fluid, and chunks of brain matter were lying on the sidewalk as Ebens and Nitz left. His last words before falling into a coma were 'It's not fair.' He never regained consciousness before dying four days later. He was supposed to be marrying in 2 days; instead, his wedding guests attended his funeral.`
  },
  {
    date: "16 March 1983",
    title: "The Court Decides",
    subtitle: `Ebens and Nitz face 3 years' probation and $3,780 in fines`,
    text: `Nine months later, the Wayne County Court, presided by Judge Charles Kaufman, came to a conclusion. Ebens plead guilty and Nitz plead no-contest to manslaughter in a plea-bargain; they were originally charged for 2nd-degree murder. Each received three years of probation and $3,780 in fines and court costs. Judge Kaufman reasoned, "These aren't the kind of men you send to jail ... You fit the punishment to the criminal, not the crime."`
  },
  {
    date: "16 March 1983",
    title: "Immediate Reactions",
    subtitle: `Leaders Meet to Move Forward`,
    text: `Henry Yee, the "unofficial mayor of Chinatown," commented on his disbelief about the sentencing. Helen Zia, a journalist, called Henry Yee from the phone number listed on the news article. Henry Yee and Helen Zia met at Carl's Steakhouse with Kin Yee, the president of the Detroit Chinese Welfare Council, and Liza Chan, a Hong-Kong born attorney. They discussed potential actions moving forward and decided to host a larger meeting to include more members of the Asian American community.`
  },
  {
    date: "20 March 1983",
    title: "First Meeting",
    subtitle: `The Asian American community gathers for justice`,
    text: `At the Golden Star Restaurant, where Vincent had worked as a waiter, around thirty people met to discuss actions. A group of around 6 lawyers (the majority of the Asian American attorneys in the state of Michigan) answered questions. As the lawyers made clear that changing a sentence was very difficult with the law, the group was stuck at what direction to take the movement in. Lily Chin, Vincent's own mother, became a decisive member as she stopped weeping and said, "We must speak up. These men killed my son like an animal. But they go free. This is wrong. We must tell the people, this is wrong." Motivated, the group decided to continue on. Liza Chan, Kin Yee, and Lily Chin would meet with Judge Kaufman about the sentencing (though he later canceled), and Helen Zia spearheaded the task of publicizing the news. The members realized a centralized organization was needed and set up a founding meeting for the following week while calling local community groups. `
  },
  {
    date: "31 March 1983",
    title: "American Citizens for Justice (ACJ)",
    subtitle: `The ACJ was formed, creating a centralized organization for the movement`,
    text: `At the Detroit Chinese Welfare Building, over a hundred Asian Americans debated over the formation of a pan-Asian organization to seek a federal civil rights investigation for Vincent Chin. Members came from many local Asian American groups, including professional associations, religious groups, women groups, and more. The name 'American Citizens for Justice' was created to make it inclusive and broad enough for further cases, creating the first explicit national Asian American grass-roots community advocacy group. Liza Chan also began doing pro bono work to find and interview witnesses of Chin's beating, soon showing many failures in the criminal justice process as police and court records were incomplete. The police did not interview many witnesses, and there was no prosecutor present when Judge Kaufman made his sentence. The ACJ's pan-Asian efforts soon spread.`
  },
  {
    date: "15 April 1983",
    title: "First Press Conference",
    subtitle: `The ACJ Hosts its First Press Conference`,
    text: `The ACJ hosted its first news conference at the Detroit Press Club. Local media appeared to see Asian Americans protesting injustice, seemingly to appear out of nowhere. Press conferences and appearances on radio shows gave them more publicity and solidarity from other organizations as the ACJ began educating the public about Asian Americans.`
  },
  {
    date: "17 April 1983",
    title: "US Department of Justice",
    subtitle: "The ACJ Meets with the Department of Justice",
    text: "Over 200 people attended this meeting with a US Dept. of Justice representative to discuss a potential federal civil rights investigation. Despite initial hesitancy, the ACJ decided that 'talking about race' would be needed to continue fighting for justice and Asian American civil rights."
  },
  {
    date: "29 April 1983",
    title: "Judge Kaufman",
    subtitle: "Attempt to make Judge Kaufman Vacate his Sentence",
    text: `Attorneys Liza Chan and Dan Hoekenga argue before Judge Kaufman to persuade him to vacate his sentence. The ACJ organizes 100 people to attend the hearing. It was not successful`
  },
  {
    date: "9 May 1983",
    title: "Demonstration",
    subtitle: `Demonstration in Kennedy Square, Detroit`,
    text: `David Chock, Michael Lee, and Man-Feng Chang, all 3 senior GM scientists, planned a citywide demonstration. Over 1,000 people came out to support, waving American flags and demanding equal justice. Restaurant owners closed to allow everyone to participate in the demonstration, and statements were made in solidarity from local politicians, NAACP, religious organizations, and the UAW. The protestors marched to the Federal Courthouse singing "We Shall Overcome" and delivered a petition to U.S. Attorney Leonard Gilman with 3,000 signatures seeking federal intervention. `
  },
  {
    date: "29 June 1983",
    title: "Federal Investigation",
    subtitle: `Seeking for a Federal Investigation`,
    text: `Lily Chin and ACJ representatives go to Washington, DC to meet with Department of Justice officials to seek a federal investigation The FBI begins investigating the killing of Chin on July 6.`
  },
  {
    date: "28 June 1984",
    title: "United States v Ebens",
    subtitle: `The Federal Trial Ends`,
    text: `The jury finds Ebens guilty of violating Chin's civil rights; Nitz was acquitted. The jury foreperson explained that the "you motherf*ckers" was clear that it was racially motivated. Ebens was sentenced to 25 years in prison.`
  },
  {
    date: "11 September 1986",
    title: "Appeal",
    subtitle: `Ebens won a retrial on appeal`,
    text: `The Sixth Circuit Court of Appeals cited that there was too much pretrial publicity and errors with the audiotapes (which had convinced the Dept. of Justice and the Asian American community of racial motivation). The new trial would be held in the conservative Cincinnati to decrease the chance of jurors having previous knowledge of the case. Eben's conviction is reversed on the appeal.`
  },
  {
    date: "1 May 1987",
    title: "Re-Trial",
    subtitle: `Ebens is Acquitted`,
    text: `Ebens is acquitted by the Cincinnati jury. No jury member had any acquaintance with Asian Americans. Mrs. Chin is devastated and soon moves to her hometown in Guangzhou, China.`
  },
  {
    date: "July 1987",
    title: "Civil Suit",
    subtitle: `Wrongful death civil suit filed`,
    text: `The civil suit, filed on behalf of Lily Chin, ordered Ebens and Nitz to pay $1.5 million to Chin's estate. Ebens later told Christine Choy, filmmaker of the documentary Who Killed Vincent Chin?, that Mrs. Chin would never see the money. He stopped making payments in 1989 and never spent a full day in jail. The ACJ has continued advocating for Asian American communities, and the movement surrounding Vincent Chin had sparked the Asian American movement.`
  },
 ];
 
 
 