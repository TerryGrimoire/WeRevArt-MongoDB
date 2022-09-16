
INSERT INTO
    `typeaccount` (`type`)
VALUES 
    ('digital Artist'),
    ('customer')
;

INSERT INTO
  `user` (`id`,`email`, `password`)
VALUES
  ('fd274f1a-ecb4-11ec-8ea0-0242ac120002','quentin.bill812@gmail.com', 'testPassword1'),
  ('5437622c-ecb5-11ec-8ea0-0242ac120002','aurore.obert@gmail.com', 'testPassword2'),
  ('5c512ede-ecb5-11ec-8ea0-0242ac120002','etienne.bacle85@gmail.com', 'testPassword3'),
  ('644929ca-ecb5-11ec-8ea0-0242ac120002','mc.mc@gmail.com', 'testPassword4')
;

INSERT INTO
    `profil`(`user_id`,`id`,`firstName`, `lastName`, `adress`, `postcode`,`city`,`country`,`username`,`typeaccount_id`, `picture_idpicture`)
VALUES
    ('fd274f1a-ecb4-11ec-8ea0-0242ac120002','beef8662-ecb5-11ec-8ea0-0242ac120002','Quentin','Billac','rue rene boylesve',37160,'Descartes','France','Quentin',1,1),
    ('5437622c-ecb5-11ec-8ea0-0242ac120002','cb0255ce-ecb5-11ec-8ea0-0242ac120002','Aurore','Obert','rue de la soif',29000,'Brest','France','Aurore',1,1),
    ('5c512ede-ecb5-11ec-8ea0-0242ac120002','d0a47566-ecb5-11ec-8ea0-0242ac120002','Etienne','Bacle','rue de loseille',33000,'Bordeaux','France','Etienne',2,1),
    ('644929ca-ecb5-11ec-8ea0-0242ac120002','d35d38d8-ecb5-11ec-8ea0-0242ac120002','MC','MC','Rue de la vieille',34000,'Montpellier','France','MC',2,2)
;

INSERT INTO
    `skills` (`skills`)
VALUES
    ('motion'),
    ('VR'),
    ('3D'),
    ('painting'),
    ('photography')
;

INSERT INTO `werevart`.`profil_has_skills` (
  `profil_id`,
  `skills_id`)
VALUES
    ('beef8662-ecb5-11ec-8ea0-0242ac120002',3),
    ('beef8662-ecb5-11ec-8ea0-0242ac120002',2),
    ('cb0255ce-ecb5-11ec-8ea0-0242ac120002',1),
    ('cb0255ce-ecb5-11ec-8ea0-0242ac120002',5)
;

INSERT INTO
    `contracttype` (`contract`)
VALUES
    ('paid service'),
    ('free collaboration')
;

INSERT INTO `werevart`.`profil_has_contracttype` (
  `profil_id`,
  `contracttype_id`)
VALUES
    ('d0a47566-ecb5-11ec-8ea0-0242ac120002',1),
    ('d35d38d8-ecb5-11ec-8ea0-0242ac120002',1),
    ('d35d38d8-ecb5-11ec-8ea0-0242ac120002',2)
;

INSERT INTO
    `softwareused` (`software`)
VALUES
    ('Harmony'),
    ('Maya'),
    ('TvPaint'),
    ('Blender'),
    ('Animate'),
    ('After Effects'),
    ('Lightroom'),
    ('Photoshop')
;

INSERT INTO `werevart`.`profil_has_softwareused` (
  `profil_id`,
  `softwareused_id`)
VALUES
    ('beef8662-ecb5-11ec-8ea0-0242ac120002',2),
    ('beef8662-ecb5-11ec-8ea0-0242ac120002',4),
    ('beef8662-ecb5-11ec-8ea0-0242ac120002',5),
    ('cb0255ce-ecb5-11ec-8ea0-0242ac120002',6),
    ('cb0255ce-ecb5-11ec-8ea0-0242ac120002',8),
    ('cb0255ce-ecb5-11ec-8ea0-0242ac120002',4)
;

INSERT INTO
    `usertype`(`usertype`)
VALUES
    ('A traditionnal artist'),
    ('A Museum'),
    ('An illustrator'),
    ('A gallery'),
    ('An art collector'),
    ('An art lover'),
    ('A digital artist'),
    ('A studio')
;

INSERT INTO `werevart`.`profil_has_usertype` (
  `profil_id`,
  `usertype_id`)
  VALUES
    ('beef8662-ecb5-11ec-8ea0-0242ac120002',7),
    ('cb0255ce-ecb5-11ec-8ea0-0242ac120002',8),
    ('d0a47566-ecb5-11ec-8ea0-0242ac120002',1),
    ('d0a47566-ecb5-11ec-8ea0-0242ac120002',2),
    ('d0a47566-ecb5-11ec-8ea0-0242ac120002',5),
    ('d35d38d8-ecb5-11ec-8ea0-0242ac120002',6),
    ('d35d38d8-ecb5-11ec-8ea0-0242ac120002',3),
    ('d35d38d8-ecb5-11ec-8ea0-0242ac120002',4)
;

INSERT INTO  `picture`(`image`,`alt`)
 VALUES
    ('https://randomwordgenerator.com/img/picture-generator/52e7d544435ab10ff3d8992cc12c30771037dbf852547941742673dc944e_640.jpg','route casser'),
    ('https://images.unsplash.com/photo-1645680827507-9f392edae51c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80','main entouré d un anneau')
;

INSERT INTO `artwork`(`id`,`hashtag`,`title`,`timeframe`,`customer`,`date`,`budget`,`offers`,`details`,`deadline`,`likes`,`picture_idpicture_original`,`picture_idpicture_digital`,`skills_id`)
VALUES
    ('ffd79002-ecb5-11ec-8ea0-0242ac120002','#test1#test2#test3#test4','route fissurée','contemporain','',14/06/2022,1000,0,'je veux que la route se casse a cause d un tremblement de terre',14/07/2022,0,1,1,5),
    ('09bf63f6-ecb6-11ec-8ea0-0242ac120002','#test4#test6#test7#test8','main entourée d un anneau','contemporain','',15/06/2022,500,0,'je veux que l anneau tourne autour de la main',30/06/2022,0,2,2,2)
;

INSERT INTO `werevart`.`profil_has_artwork` (
    `profil_id`,
  `artwork_id`)
VALUES
    ('d0a47566-ecb5-11ec-8ea0-0242ac120002','ffd79002-ecb5-11ec-8ea0-0242ac120002'),
    ('d35d38d8-ecb5-11ec-8ea0-0242ac120002','09bf63f6-ecb6-11ec-8ea0-0242ac120002')
;
