# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
# #
# User.create({username: 'Harley', email_address: 'harleymteden@gmail.com', password: 'harley'})
#
# Soundkit.create([{ name: 'Star Wars Drums', url: 'some website'}, { url: 'some site', name: 'Splice Sounds v1' }])
# #   Character.create(name: 'Luke', movie: movies.first)
# Recording.create([{title: 'cool beat', user_id: 1}, {title: 'cool beat 2', user_id: 1}])
#
# UserSoundkit.create({user_id: 1, soundkit_id: 1})


Soundkit.create([
  { name: 'Medasin Microdose Vol. 1', url: 'amazon s3'},
  ])

Sound.create([
  { name: 'Chunk Snare', url: 'https://mpcloud.s3-us-west-1.amazonaws.com/Medasin+Microdose+Vol.+1/MM_-_CHUNK_SNARE_2.wav', soundkit_id: 1},
  { name: 'Coins', url: 'https://mpcloud.s3-us-west-1.amazonaws.com/Medasin+Microdose+Vol.+1/CoinsMovement_S08FO.749.wav', soundkit_id: 1},
  { name: 'Smoothie', url: 'https://mpcloud.s3-us-west-1.amazonaws.com/Medasin+Microdose+Vol.+1/FD_85_Emaj9_Smoothie_FA.wav', soundkit_id: 1},
  { name: 'Rhodes', url: 'https://mpcloud.s3-us-west-1.amazonaws.com/Medasin+Microdose+Vol.+1/G%23maj7_Rhodes_High_TL.wav', soundkit_id: 1},
  { name: 'Flange Hat', url: 'https://mpcloud.s3-us-west-1.amazonaws.com/Medasin+Microdose+Vol.+1/HH_Flange2.wav', soundkit_id: 1},
  { name: 'Purple Hat', url: 'https://mpcloud.s3-us-west-1.amazonaws.com/Medasin+Microdose+Vol.+1/HHr_Purple.wav', soundkit_id: 1},
  { name: 'Hydrophone', url: 'https://mpcloud.s3-us-west-1.amazonaws.com/Medasin+Microdose+Vol.+1/Hydrophone_mic_-_water_in_glass.wav', soundkit_id: 1},
  { name: 'Tremolo Organ', url: 'https://mpcloud.s3-us-west-1.amazonaws.com/Medasin+Microdose+Vol.+1/JNTHN_organ_tremolo_03_Ebm9.wav', soundkit_id: 1},
  { name: 'QQ Snare', url: 'https://mpcloud.s3-us-west-1.amazonaws.com/Medasin+Microdose+Vol.+1/MEDASIN_QQ_snare_12.wav', soundkit_id: 1},
  { name: 'Kick', url: 'https://mpcloud.s3-us-west-1.amazonaws.com/Medasin+Microdose+Vol.+1/MM_-_ANOTHER_KICK_-_FM.wav', soundkit_id: 1},
  { name: 'Beep Synth', url: 'https://mpcloud.s3-us-west-1.amazonaws.com/Medasin+Microdose+Vol.+1/MM_-_BEEP_SYNTH_-_C%23M.wav', soundkit_id: 1},
  { name: 'Hey Now Clap', url: 'https://mpcloud.s3-us-west-1.amazonaws.com/Medasin+Microdose+Vol.+1/MM_-_HEYNOW2CLAP_2.wav', soundkit_id: 1},
  { name: 'Metallic Clap', url: 'https://mpcloud.s3-us-west-1.amazonaws.com/Medasin+Microdose+Vol.+1/MM_-_METALLIC_CLAP_-_G%23M.wav', soundkit_id: 1},
  { name: 'Metal Snare', url: 'https://mpcloud.s3-us-west-1.amazonaws.com/Medasin+Microdose+Vol.+1/MM_-_METAL_SNARE_-_C%23M.wav', soundkit_id: 1},
  { name: 'Kerri Organ', url: 'https://mpcloud.s3-us-west-1.amazonaws.com/Medasin+Microdose+Vol.+1/MRDH_-_CS_Kerri_Organ_Fm.wav', soundkit_id: 1},
  { name: 'Reverse Trench', url: 'https://mpcloud.s3-us-west-1.amazonaws.com/Medasin+Microdose+Vol.+1/NL1_Reverse_Trench_Fm.wav', soundkit_id: 1}
  ])
