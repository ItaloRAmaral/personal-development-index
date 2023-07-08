## [LIVRO] Extreme Programming Pocket Guide

Author: Shane Warden

Release date: July 2003

##

# Part I - Why XP?

The philosophy of Extreme Programming (XP) revolves around the idea that the traditional approaches to software development face challenges when dealing with uncertainty and change. XP is designed to add flexibility and adaptability into the development process. It is a lightweight methodology that is based on a set of values, principles, and practices. XP is a disciplined approach to software development that is designed to deliver high-quality software quickly and continuously. XP is a team-based approach to software development that is based on the values of communication, simplicity, feedback, and courage. XP is a methodology that is based on the principles of rapid feedback, incremental change, assumption elimination, and embracing change. XP is a set of practices that are designed to support the values and principles of XP. XP is a methodology that is designed to be adapted to the needs of the team and the project.

### Chapter 1 - Who Cares About Process, Anyway? 

In the first chapter of the book, the author questions the importance of discussing customer rights, business changes, and software development methodologies. This section, "Who Cares About Process, Anyway?", argues that the development process is crucial as it sets the project's values and guidelines, which in turn shape the project's culture and the software it produces.

The author illustrates this by explaining that if a project values extensive written documentation, it will produce a lot of it. If a project values reliability, it will invest time in testing and proving code correctness. However, the author also emphasizes that the methods that are actually practiced determine the project's culture. For instance, a method that recommends extensive design documents is pointless if no one reads or updates them.

The author further argues that the practiced development method determines the kind of team and software produced. For example, a project can only promise developers a forty-hour work week if it knows how to avoid overworking before a release. Similarly, a project can only promise customers that all code is reviewed if developers actually check each other's code.

The section concludes by stating that the only way to rescue a troubled project or team is to identify what's wrong and fix it. Following a good development method is a great place to start. The author then sets the stage for the rest of the book, which discusses XP’s values, how it achieves those goals, and how to adopt those goals in your own project. But first, we need to understand how XP views software development.

### Chapter 2 - The XP Equation

This chapter discusses the four variables that can be managed in software projects: time, scope, resources, and quality. These variables interact to shape a project, even if they're not directly measured.

The chapter uses the analogy of a water filtration plant on a space station to explain these variables. The plant has a control panel with four dials, each representing one of the variables. The Time dial adjusts the amount of time spent filtering water, the Resources dial changes the amount of equipment used, the Scope dial adjusts the amount of potable water the plant will produce, and the Quality dial is more complex, affecting the other three variables.

In the context of software development, these variables can be understood as follows:

- Time: The amount of time dedicated to developing the software. If other variables remain constant, more time will result in more software being produced.
- Resources: The resources (like developers, tools, etc.) used in the software development process. If other variables remain constant, more resources will result in more software being produced.
- Scope: The amount of software the project will produce. If other variables remain constant, an increase in scope will require an increase in time or resources, or a decrease in quality.
- Quality: The quality of the software being produced. Few projects ever decrease quality directly, but increasing scope without increasing time or resources, or reducing time or resources without decreasing scope, tends to decrease quality indirectly.

The chapter argues that many projects focus on time and resources, assuming that quality will stay fixed. If scope ever changes, it's usually increased. However, Extreme Programming (XP) suggests a different strategy. It recommends agreeing as a team on an acceptable level of quality and considering time and resources as fixed. The only remaining question is that of scope. What will be delivered? When will it be delivered?

The chapter concludes by stating that exposing the tradeoffs of changes leads to fewer surprises and smoother development. This is another fundamental assumption of Extreme Programming: given healthy communication within the team, rapid feedback on the state of the project, and the ability to adjust scope as necessary, XP practitioners are free to assume sufficient resources.

### Chapter 3 - XP Values

This chapter discusses the four main values that underpin Extreme Programming (XP): communication, feedback, simplicity, and courage. All of XP’s practices support these values.

- Communication: Good communication is essential to any project. Honest, regular communication allows you to adjust to change. This is how developers know what to do and how the customer knows when it will be done. Hiding or ignoring information can sink your project. XP asks people in business roles to make business decisions and people in technical roles to make technical decisions. XP puts developers and customers in constant communication, removing the communication barriers between customers and developers to increase flexibility.

- Feedback: Feedback means asking questions and learning from the answers. The only way to know what a customer really wants is to ask them. The only way to know if the code does what it really should do is to test it. The sooner you can get feedback, the more time you have to react to it. XP provides rapid, frequent feedback. Every XP practice is part of a built-in feedback loop. Rapid feedback reduces the investment of time and resources in ideas with little payoff.

- Simplicity: Simplicity in XP is about doing what is needed and asked for, and no more. This means you should not add functionality until it is actually necessary. XP encourages starting with the simplest solution and refactoring the code when necessary. This saves time and keeps the code base maintainable over time.

- Courage: Courage in XP is about the ability to make decisions and changes even when these changes might disrupt the project’s status quo. This includes the willingness to discard code and start over if necessary. This value is necessary because the nature of software development is such that change is inevitable.

These values are the foundation of XP and guide the way the team works together and how they make decisions. They are the principles that underpin all the practices and techniques in XP.

### Chapter 4 - Assuming Sufficiency

Software development is often a competition for time and resources:managers fight developers, developers fight managers, andeveryone fights customers.

XP asks a different question. Given sufficient time and resources,how would you develop software?

- Sufficient Time: XP assumes that there is enough time to get the necessary work done. This doesn't mean that there is unlimited time, but rather that the time available is used efficiently and effectively. XP encourages short iterations and frequent feedback to ensure that time is used well.

- Sufficient Resources: XP assumes that there are enough resources (people, tools, etc.) to complete the work. This doesn't mean that resources are unlimited, but rather that they are used efficiently and effectively. XP encourages practices like pair programming and collective code ownership to make the most of the available resources.

- Constant Cost of Change: XP assumes that the cost of change can be kept constant over time. This is contrary to the traditional belief that the cost of change increases dramatically as a project progresses. XP achieves this through practices like continuous integration, test-driven development, and refactoring, which make it easier to make changes at any stage of the project.

- Developer Effectiveness: XP assumes that developers are effective and can produce quality work. This doesn't mean that developers are infallible, but rather that they are capable and competent. XP encourages practices like coding standards and a common vocabulary to increase developer effectiveness.

- Freedom to Experiment: XP assumes that developers have the freedom to experiment and try new approaches. This doesn't mean that developers can do whatever they want, but rather that they are encouraged to explore different solutions and learn from their experiences. XP encourages practices like spike solutions and the rule of simplicity to foster a culture of experimentation.

These assumptions of sufficiency are fundamental to XP and shape how it approaches software development. They create a culture of efficiency, effectiveness, adaptability, competence, and innovation.

---

# Part II - Extreme Programming Practices

This part of the book delves into the core practices that make up Extreme Programming (XP). These practices are divided into three categories: Coding Practices, Developer Practices, and Business Practices.

### Chapter 5 - Coding Practices

This chapter delves into the four coding practices that are integral to Extreme Programming (XP).

- Code and Design Simply: This practice emphasizes the importance of simplicity in code and design. It encourages developers to avoid overcomplicating their code and to focus on creating the simplest solution that works. This practice is based on the belief that simple code is easier to understand, maintain, and modify. The chapter explains that simple code is not necessarily about writing less code, but about writing clear, straightforward code that does exactly what it's supposed to do and nothing more. It also discusses the concept of "You Aren't Gonna Need It" (YAGNI), which advises developers to avoid adding functionality until it is absolutely necessary.

- Refactor Mercilessly: Refactoring is the process of improving the design of existing code without changing its external behavior. This practice encourages developers to constantly refactor their code to improve its structure and readability. This helps to keep the code clean and easy to understand, which in turn makes it easier to maintain and extend. The chapter discusses the importance of refactoring in maintaining the simplicity of the code. It also explains that refactoring should be done in small steps and should be accompanied by tests to ensure that the behavior of the code has not changed.

- Develop Coding Standards: This practice emphasizes the importance of having a set of coding standards that all developers on the team follow. Coding standards help to ensure that the code is consistent and easy to understand, which makes it easier for developers to work together and for new developers to get up to speed. The chapter discusses the benefits of coding standards and provides some examples of what these standards might include, such as naming conventions and formatting rules.

- Develop a Common Vocabulary: This practice encourages developers to use a common vocabulary when naming classes, methods, and variables. This helps to make the code more self-explanatory and easier to understand, which in turn makes it easier to maintain and modify. The chapter explains that a common vocabulary helps to reduce misunderstandings and miscommunications among team members. It also provides some tips for developing a common vocabulary, such as using names that accurately describe what a class or method does.

The chapter emphasizes that these coding practices are not standalone practices but are interconnected and support each other. For instance, having a common vocabulary and coding standards makes it easier to keep the code simple and to refactor it mercilessly.

## Chapter 6 - Developer Practices

This chapter delves into the practices that developers should adopt in order to effectively implement Extreme Programming (XP). The practices are designed to enhance productivity, improve code quality, and foster a collaborative work environment. Here's a detailed breakdown of each practice:

- Adopt Test-Driven Development: This practice emphasizes the importance of writing tests before writing the actual code. The idea is to first write a test that fails, then write the minimum amount of code necessary to pass the test, and finally refactor the code to improve its structure while ensuring the test still passes. This approach ensures that all code is tested and that the tests drive the development process. It also helps developers to think about the functionality and design of the code from the outset.

- Practice Pair Programming: Pair programming involves two developers working together at one workstation. One developer, the "driver", writes the code, while the other, the "navigator", reviews each line of code as it's written. The roles are frequently switched. This practice enhances code quality by facilitating immediate code review and knowledge sharing. It also encourages collaboration and helps to distribute knowledge across the team.

- Adopt Collective Code Ownership: In this practice, all code is owned by the team rather than by individual developers. This means that any developer can change any part of the codebase at any time. Collective code ownership promotes flexibility and prevents bottlenecks, as developers are not waiting for a particular person to make changes. It also encourages knowledge sharing and collaboration, as developers need to communicate and work together to maintain and improve the codebase.

- Integrate Continually: Continuous integration involves integrating code changes into the main codebase frequently, often several times a day. Each integration is verified by an automated build and test process to detect integration errors as quickly as possible. This practice helps to prevent integration problems, enables faster feedback, and ensures that the software is always in a releasable state.

Each of these practices is designed to work in conjunction with the others, creating a synergistic effect that enhances the overall effectiveness of the development process. However, it's important to note that these practices require discipline and commitment from the entire team to be successful.

### Chapter 7 - Business Practices

<strong> Business Practice 1: Add a Customer to the Team </strong> 

In practice, this means that a representative from the customer's side (who has a deep understanding of the business needs and the authority to make decisions) should be actively involved in the development process. They should be available to answer questions, clarify requirements, and provide feedback on the software as it evolves. This could involve daily stand-ups, review meetings, or even co-location with the development team. The customer representative also helps in defining and prioritizing user stories, which are short, simple descriptions of a feature told from the perspective of the person who desires the new capability.

<strong> Business Practice 2: Play the Planning Game </strong> 

The Planning Game is a collaborative exercise. In a practical setting, it might look like a meeting where the customer presents the desired features (user stories), and the developers give their estimates for each. The customer then prioritizes these stories based on their business value and the developers' estimates. This could be done using tools like a Kanban board or a project management software where stories can be moved around based on their priority. The outcome of this game is a clear plan for the next iteration, with everyone having a shared understanding of what will be developed and why.

<strong> Business Practice 3: Release Regularly </strong>

In a practical sense, this means setting up a development process where a working version of the software is produced at the end of each iteration. This requires a strong focus on testing and integration throughout the iteration, so that the software is always in a releasable state. Tools like continuous integration servers and automated testing frameworks can be very helpful in implementing this practice. The regular releases should be shared with the customer for review and feedback, which can be incorporated in the next iteration.

<strong> Business Practice 4: Work at a Sustainable Pace </strong>

Practically, this means setting realistic expectations and avoiding overcommitment. It involves respecting normal working hours and discouraging overtime. It might mean pushing back against pressure to add more stories to an iteration than can be comfortably achieved, or being willing to extend timelines rather than overworking the team. It also involves taking care of the team's wellbeing, for example by ensuring regular breaks and time for relaxation and team-building activities.

These practices are all about creating a productive, sustainable and customer-focused environment for software development. They require a commitment from all team members, as well as support from the wider organization, to be effectively implemented.

---

# Part III - XP Events

Iterations are crucial to XP. They’re independent and self-contained— smaller, faster versions of the traditional software developmentcycle. Iterations lessen risk by taking on less work. Iterations allowrapid feedback and improved flexibility because of their shorterlength. If you can work in small steps, you can refine your decisionsas your ultimate goals become clearer.

### Chapter 8 - Iteration Planning