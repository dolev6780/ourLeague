export const TypeOptions = ["Football", "Baseball", "Basketball", "Hockey", "Tennis","FIFA", "NBA2K", "Mario Kart","Other"];
export const membersOptionsCompetition = Array.from(Array(33), (_, index) =>
index
).filter((option) => option !== 0);
export const membersOptionsTournament = Array.from(Array(32), (_, index) => Math.pow(2, index))
.filter((option) => option <= Math.pow(2, 5))
.filter((option) => option !== 1);
export const membersOptionsLeague = Array.from(Array(21), (_, index) => index).filter(
    (option) => option !== 0
  );

export const TournamentSlides = [
    {
      title: "Create New Tournament",
    },
    {
      title: "Winner",
    },
    {
      title: "TODO",
     
    },
  ];