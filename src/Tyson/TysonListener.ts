// Generated from src/Tyson/Tyson.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { UnaryMinusExpressionContext } from "./TysonParser";
import { NotExpressionContext } from "./TysonParser";
import { PowerExpressionContext } from "./TysonParser";
import { MultExpressionContext } from "./TysonParser";
import { AddExpressionContext } from "./TysonParser";
import { CompExpressionContext } from "./TysonParser";
import { EqExpressionContext } from "./TysonParser";
import { AndExpressionContext } from "./TysonParser";
import { OrExpressionContext } from "./TysonParser";
import { TernaryExpressionContext } from "./TysonParser";
import { InExpressionContext } from "./TysonParser";
import { NumberExpressionContext } from "./TysonParser";
import { BoolExpressionContext } from "./TysonParser";
import { NullExpressionContext } from "./TysonParser";
import { FunctionCallExpressionContext } from "./TysonParser";
import { ListExpressionContext } from "./TysonParser";
import { IdentifierExpressionContext } from "./TysonParser";
import { StringExpressionContext } from "./TysonParser";
import { ExpressionExpressionContext } from "./TysonParser";
import { IdentifierFunctionCallContext } from "./TysonParser";
import { ProgContext } from "./TysonParser";
import { StatementContext } from "./TysonParser";
import { AssignmentContext } from "./TysonParser";
import { FunctionCallContext } from "./TysonParser";
import { IfStatementContext } from "./TysonParser";
import { IfStatContext } from "./TysonParser";
import { ElseIfStatContext } from "./TysonParser";
import { ElseStatContext } from "./TysonParser";
import { ForStatementContext } from "./TysonParser";
import { WhileStatementContext } from "./TysonParser";
import { ExprListContext } from "./TysonParser";
import { ExpressionContext } from "./TysonParser";
import { ListContext } from "./TysonParser";
import { IndexesContext } from "./TysonParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `TysonParser`.
 */
export interface TysonListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `unaryMinusExpression`
	 * labeled alternative in `TysonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterUnaryMinusExpression?: (ctx: UnaryMinusExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `unaryMinusExpression`
	 * labeled alternative in `TysonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitUnaryMinusExpression?: (ctx: UnaryMinusExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `notExpression`
	 * labeled alternative in `TysonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterNotExpression?: (ctx: NotExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `notExpression`
	 * labeled alternative in `TysonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitNotExpression?: (ctx: NotExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `powerExpression`
	 * labeled alternative in `TysonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterPowerExpression?: (ctx: PowerExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `powerExpression`
	 * labeled alternative in `TysonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitPowerExpression?: (ctx: PowerExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `multExpression`
	 * labeled alternative in `TysonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterMultExpression?: (ctx: MultExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `multExpression`
	 * labeled alternative in `TysonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitMultExpression?: (ctx: MultExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `addExpression`
	 * labeled alternative in `TysonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterAddExpression?: (ctx: AddExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `addExpression`
	 * labeled alternative in `TysonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitAddExpression?: (ctx: AddExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `compExpression`
	 * labeled alternative in `TysonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterCompExpression?: (ctx: CompExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `compExpression`
	 * labeled alternative in `TysonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitCompExpression?: (ctx: CompExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `eqExpression`
	 * labeled alternative in `TysonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterEqExpression?: (ctx: EqExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `eqExpression`
	 * labeled alternative in `TysonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitEqExpression?: (ctx: EqExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `andExpression`
	 * labeled alternative in `TysonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterAndExpression?: (ctx: AndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `andExpression`
	 * labeled alternative in `TysonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitAndExpression?: (ctx: AndExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `orExpression`
	 * labeled alternative in `TysonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterOrExpression?: (ctx: OrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `orExpression`
	 * labeled alternative in `TysonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitOrExpression?: (ctx: OrExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `ternaryExpression`
	 * labeled alternative in `TysonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterTernaryExpression?: (ctx: TernaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ternaryExpression`
	 * labeled alternative in `TysonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitTernaryExpression?: (ctx: TernaryExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `inExpression`
	 * labeled alternative in `TysonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterInExpression?: (ctx: InExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `inExpression`
	 * labeled alternative in `TysonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitInExpression?: (ctx: InExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `numberExpression`
	 * labeled alternative in `TysonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterNumberExpression?: (ctx: NumberExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `numberExpression`
	 * labeled alternative in `TysonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitNumberExpression?: (ctx: NumberExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `boolExpression`
	 * labeled alternative in `TysonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterBoolExpression?: (ctx: BoolExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `boolExpression`
	 * labeled alternative in `TysonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitBoolExpression?: (ctx: BoolExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `nullExpression`
	 * labeled alternative in `TysonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterNullExpression?: (ctx: NullExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `nullExpression`
	 * labeled alternative in `TysonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitNullExpression?: (ctx: NullExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `functionCallExpression`
	 * labeled alternative in `TysonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterFunctionCallExpression?: (ctx: FunctionCallExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `functionCallExpression`
	 * labeled alternative in `TysonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitFunctionCallExpression?: (ctx: FunctionCallExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `listExpression`
	 * labeled alternative in `TysonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterListExpression?: (ctx: ListExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `listExpression`
	 * labeled alternative in `TysonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitListExpression?: (ctx: ListExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `identifierExpression`
	 * labeled alternative in `TysonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterIdentifierExpression?: (ctx: IdentifierExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `identifierExpression`
	 * labeled alternative in `TysonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitIdentifierExpression?: (ctx: IdentifierExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `stringExpression`
	 * labeled alternative in `TysonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterStringExpression?: (ctx: StringExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `stringExpression`
	 * labeled alternative in `TysonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitStringExpression?: (ctx: StringExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `expressionExpression`
	 * labeled alternative in `TysonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpressionExpression?: (ctx: ExpressionExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `expressionExpression`
	 * labeled alternative in `TysonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpressionExpression?: (ctx: ExpressionExpressionContext) => void;

	/**
	 * Enter a parse tree produced by the `identifierFunctionCall`
	 * labeled alternative in `TysonParser.functionCall`.
	 * @param ctx the parse tree
	 */
	enterIdentifierFunctionCall?: (ctx: IdentifierFunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by the `identifierFunctionCall`
	 * labeled alternative in `TysonParser.functionCall`.
	 * @param ctx the parse tree
	 */
	exitIdentifierFunctionCall?: (ctx: IdentifierFunctionCallContext) => void;

	/**
	 * Enter a parse tree produced by `TysonParser.prog`.
	 * @param ctx the parse tree
	 */
	enterProg?: (ctx: ProgContext) => void;
	/**
	 * Exit a parse tree produced by `TysonParser.prog`.
	 * @param ctx the parse tree
	 */
	exitProg?: (ctx: ProgContext) => void;

	/**
	 * Enter a parse tree produced by `TysonParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `TysonParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `TysonParser.assignment`.
	 * @param ctx the parse tree
	 */
	enterAssignment?: (ctx: AssignmentContext) => void;
	/**
	 * Exit a parse tree produced by `TysonParser.assignment`.
	 * @param ctx the parse tree
	 */
	exitAssignment?: (ctx: AssignmentContext) => void;

	/**
	 * Enter a parse tree produced by `TysonParser.functionCall`.
	 * @param ctx the parse tree
	 */
	enterFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by `TysonParser.functionCall`.
	 * @param ctx the parse tree
	 */
	exitFunctionCall?: (ctx: FunctionCallContext) => void;

	/**
	 * Enter a parse tree produced by `TysonParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	enterIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Exit a parse tree produced by `TysonParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	exitIfStatement?: (ctx: IfStatementContext) => void;

	/**
	 * Enter a parse tree produced by `TysonParser.ifStat`.
	 * @param ctx the parse tree
	 */
	enterIfStat?: (ctx: IfStatContext) => void;
	/**
	 * Exit a parse tree produced by `TysonParser.ifStat`.
	 * @param ctx the parse tree
	 */
	exitIfStat?: (ctx: IfStatContext) => void;

	/**
	 * Enter a parse tree produced by `TysonParser.elseIfStat`.
	 * @param ctx the parse tree
	 */
	enterElseIfStat?: (ctx: ElseIfStatContext) => void;
	/**
	 * Exit a parse tree produced by `TysonParser.elseIfStat`.
	 * @param ctx the parse tree
	 */
	exitElseIfStat?: (ctx: ElseIfStatContext) => void;

	/**
	 * Enter a parse tree produced by `TysonParser.elseStat`.
	 * @param ctx the parse tree
	 */
	enterElseStat?: (ctx: ElseStatContext) => void;
	/**
	 * Exit a parse tree produced by `TysonParser.elseStat`.
	 * @param ctx the parse tree
	 */
	exitElseStat?: (ctx: ElseStatContext) => void;

	/**
	 * Enter a parse tree produced by `TysonParser.forStatement`.
	 * @param ctx the parse tree
	 */
	enterForStatement?: (ctx: ForStatementContext) => void;
	/**
	 * Exit a parse tree produced by `TysonParser.forStatement`.
	 * @param ctx the parse tree
	 */
	exitForStatement?: (ctx: ForStatementContext) => void;

	/**
	 * Enter a parse tree produced by `TysonParser.whileStatement`.
	 * @param ctx the parse tree
	 */
	enterWhileStatement?: (ctx: WhileStatementContext) => void;
	/**
	 * Exit a parse tree produced by `TysonParser.whileStatement`.
	 * @param ctx the parse tree
	 */
	exitWhileStatement?: (ctx: WhileStatementContext) => void;

	/**
	 * Enter a parse tree produced by `TysonParser.exprList`.
	 * @param ctx the parse tree
	 */
	enterExprList?: (ctx: ExprListContext) => void;
	/**
	 * Exit a parse tree produced by `TysonParser.exprList`.
	 * @param ctx the parse tree
	 */
	exitExprList?: (ctx: ExprListContext) => void;

	/**
	 * Enter a parse tree produced by `TysonParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `TysonParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `TysonParser.list`.
	 * @param ctx the parse tree
	 */
	enterList?: (ctx: ListContext) => void;
	/**
	 * Exit a parse tree produced by `TysonParser.list`.
	 * @param ctx the parse tree
	 */
	exitList?: (ctx: ListContext) => void;

	/**
	 * Enter a parse tree produced by `TysonParser.indexes`.
	 * @param ctx the parse tree
	 */
	enterIndexes?: (ctx: IndexesContext) => void;
	/**
	 * Exit a parse tree produced by `TysonParser.indexes`.
	 * @param ctx the parse tree
	 */
	exitIndexes?: (ctx: IndexesContext) => void;
}

